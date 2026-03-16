ubuntu@ip-172-26-8-251:~$ cat /home/ubuntu/news-automation/run.mjs
/**
 * Standalone news automation script
 * Runs directly with Node.js — no Next.js, no Vercel, no timeout
 *
 * Usage:
 *   node /home/ubuntu/news-automation/run.mjs
 *
 * Cron (every hour):
 *   0 * * * * node /home/ubuntu/news-automation/run.mjs >> /home/ubuntu/news-cron.log 2>&1
 *
 * Env vars loaded from /home/ubuntu/news-automation/.env
 */

import { readFileSync } from 'fs';
import { createRequire } from 'module';
import { pathToFileURL } from 'url';
import mongoose from 'mongoose';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// ─── Load .env file ───────────────────────────────────────────────────────────
function loadEnv() {
  try {
    const lines = readFileSync('/home/ubuntu/news-automation/.env', 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx === -1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
      process.env[key] = val;
    }
    console.log('[ENV] ✅ Loaded .env');
  } catch (e) {
    console.error('[ENV] ❌ Could not load .env:', e.message);
    process.exit(1);
  }
}
loadEnv();

// ─── Config ───────────────────────────────────────────────────────────────────
const TOTAL_ARTICLES_PER_RUN  = 10;
const ARTICLES_PER_CATEGORY   = 3;
const DELAY_BETWEEN_ARTICLES  = 15000;

const TAG_COLORS = {
  'AI':          '#6B7FD7',
  'Security':    '#E8526A',
  'Cloud':       '#3FC87A',
  'Tools':       '#F5A623',
  'Web':         '#C17EE8',
  'Mobile':      '#5BB8F5',
  'Open Source': '#3FC87A',
  'Startups':    '#E87CF3',
};

// ─── Logger ───────────────────────────────────────────────────────────────────
function ts() { return new Date().toTimeString().slice(0, 8); }
const log = {
  info:  m => console.log(`[NEWS-AUTO ${ts()}] ℹ  ${m}`),
  ok:    m => console.log(`[NEWS-AUTO ${ts()}] ✅  ${m}`),
  skip:  m => console.log(`[NEWS-AUTO ${ts()}] ⏭  ${m}`),
  error: m => console.error(`[NEWS-AUTO ${ts()}] ❌  ${m}`),
  ai:    m => console.log(`[NEWS-AUTO ${ts()}] 烙  ${m}`),
};

// ─── MongoDB ─────────────────────────────────────────────────────────────────
async function connectDB() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
  log.info('MongoDB connected');
}

function getNewsModel() {
  if (mongoose.models.News) return mongoose.models.News;
  const s = new mongoose.Schema({
    title:       { type: String, required: true },
    slug:        { type: String, unique: true, sparse: true },
    summary:     { type: String, required: true, maxlength: 300 },
    content:     { type: String, required: true },
    tag:         { type: String, required: true },
    tagColor:    { type: String, required: true },
    imageUrl:    { type: String, required: true },
    imageKey:    { type: String, required: true },
    source:      { type: String, required: true },
    sourceUrl:   { type: String, default: '' },
    readTime:    { type: Number, default: 3 },
    featured:    { type: Boolean, default: false },
    published:   { type: Boolean, default: true },
    views:       { type: Number, default: 0 },
    author:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    contentType: { type: String, default: 'news' },
  }, { timestamps: true });

  s.pre('save', function(next) {
    if (!this.slug && this.title) {
      this.slug = this.title.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
        .slice(0, 80) + '-' + Date.now().toString(36);
    }
    next();
  });
  return mongoose.model('News', s);
}

function getUserModel() {
  if (mongoose.models.User) return mongoose.models.User;
  const s = new mongoose.Schema({
    name:  String,
    email: { type: String, unique: true },
    role:  { type: String, default: 'admin' },
  }, { timestamps: true });
  return mongoose.model('User', s);
}

async function getBotUserId() {
  const User = getUserModel();
  let bot = await User.findOne({ email: 'bot@pdftool.auto' }).lean();
  if (!bot) {
    bot = await User.create({ name: 'News Bot', email: 'bot@pdftool.auto', role: 'admin' });
  }
  return bot._id;
}

// ─── RSS feeds ────────────────────────────────────────────────────────────────
const RSS_FEEDS = {
  'AI':          'https://news.google.com/rss/search?q=artificial+intelligence+AI+machine+learning&hl=en-US&gl=US&ceid=US:en',
  'Security':    'https://news.google.com/rss/search?q=cybersecurity+hacking+data+breach&hl=en-US&gl=US&ceid=US:en',
  'Cloud':       'https://news.google.com/rss/search?q=cloud+computing+AWS+Azure+Google+Cloud&hl=en-US&gl=US&ceid=US:en',
  'Tools':       'https://news.google.com/rss/search?q=developer+tools+programming+software&hl=en-US&gl=US&ceid=US:en',
  'Web':         'https://news.google.com/rss/search?q=web+development+javascript+react+nextjs&hl=en-US&gl=US&ceid=US:en',
  'Mobile':      'https://news.google.com/rss/search?q=mobile+app+iOS+Android+development&hl=en-US&gl=US&ceid=US:en',
  'Open Source': 'https://news.google.com/rss/search?q=open+source+github+linux&hl=en-US&gl=US&ceid=US:en',
  'Startups':    'https://news.google.com/rss/search?q=tech+startup+funding+venture+capital&hl=en-US&gl=US&ceid=US:en',
};

async function fetchRSS(url, category) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NewsBot/1.0)' },
      signal: AbortSignal.timeout(10_000),
    });
    const xml = await res.text();
    const items = [];
    const itemRe = /<item>([\s\S]*?)<\/item>/gi;
    let m;
    while ((m = itemRe.exec(xml)) !== null && items.length < ARTICLES_PER_CATEGORY) {
      const block = m[1];
      const get = tag => {
        const r = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\/${tag}>|<${tag}[^>]*>([^<]*)<\/${tag}>`, 'i');
        const match = r.exec(block);
        return match ? (match[1] || match[2] || '').trim() : '';
      };
      const title = get('title');
      const link  = get('link') || get('guid');
      if (title && link) {
        items.push({ title, link, source: category + ' News', description: get('description'), category });
      }
    }
    return items;
  } catch { return []; }
}

async function collectTopItems() {
  log.info('Collecting RSS feeds from all categories...');
  const all = [];
  for (const [cat, url] of Object.entries(RSS_FEEDS)) {
    const items = await fetchRSS(url, cat);
    log.info(`  ${cat}: got ${items.length} items`);
    all.push(...items);
  }
  // Shuffle and pick top N
  const shuffled = all.sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, TOTAL_ARTICLES_PER_RUN);
  log.info(`Collected ${all.length} total → selected top ${selected.length} for this run`);
  return selected;
}

// ─── URL resolver ─────────────────────────────────────────────────────────────
async function resolveUrl(url) {
  try {
    const res = await fetch(url, {
      method: 'HEAD', redirect: 'follow',
      headers: { 'User-Agent': 'Mozilla/5.0' },
      signal: AbortSignal.timeout(8_000),
    });
    return res.url || url;
  } catch { return url; }
}

// ─── Scraper ──────────────────────────────────────────────────────────────────
async function scrapeText(url) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'text/html' },
      signal: AbortSignal.timeout(12_000),
    });
    if (!res.ok) return '';
    const html = await res.text();
    const paras = [];
    const re = /<p[^>]*>([\s\S]*?)<\/p>/gi;
    let m;
    while ((m = re.exec(html)) !== null) {
      const t = m[1]
        .replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&').replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>').replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
      if (t.length > 60) paras.push(t);
      if (paras.length >= 25) break;
    }
    return paras.join('\n\n');
  } catch { return ''; }
}

// ─── Gemini text ──────────────────────────────────────────────────────────────
async function rewriteWithGemini(title, rawText, source, sourceUrl, category) {
  const apiKey = process.env.GEMINI_API_KEY;
 if (!apiKey) { log.error('GEMINI_API_KEY not set'); return null; }
const apiKeys = [
    process.env.GEMINI_API_KEY
  ].filter(Boolean);
  if (!apiKeys.length) { log.error('No GEMINI API keys set'); return null; }

  const hasContent = rawText && rawText.length > 200;
  const prompt =
    'You are a professional tech journalist. Write a complete original blog article.\n\n' +
    'HEADLINE: ' + title + '\n' +
    'CATEGORY: ' + category + '\n' +
    'SOURCE: ' + source + '\n' +
    (hasContent
      ? 'RAW TEXT (use as reference):\n' + rawText.slice(0, 3500)
      : 'NOTE: No source text available. Write a well-researched article based on your knowledge of this topic and headline.') +
    '\n\nOUTPUT RULES — follow exactly:\n' +
    'Line 1:  TITLE: your SEO blog title (max 80 chars, no quotes)\n' +
    'Line 2:  SUMMARY: one sentence summary (max 260 chars, no quotes)\n' +
    'Line 3:  ARTICLE_START\n' +
    'Lines 4+: the full markdown article (450-600 words)\n' +
    'Last line: ARTICLE_END\n\n' +
    'ARTICLE REQUIREMENTS:\n' +
    '- Strong opening paragraph with no heading\n' +
    '- Use these headings in order:\n' +
    '  ## What Happened\n  ## Why It Matters\n  ## Key Details  (use bullet points here)\n' +
    '  ## What This Means For You\n  ## Takeaway\n' +
    '- Neutral journalistic tone\n' +
    '- Very last line: *Source: [' + source + '](' + sourceUrl + ')*\n\n' +
    'OUTPUT NOTHING ELSE. No JSON. No explanation. No markdown fences.';

  log.ai('Sending to Gemini 2.5 Flash: "' + title.slice(0, 55) + '..."');

  try {
    const res = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + apiKey,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.65, maxOutputTokens: 2000 },
        }),
        signal: AbortSignal.timeout(60_000),
      }
    );
    if (res.ok) break;
    if (res.status === 429) {
      log.error('Key ...' + key.slice(-6) + ' hit 429 — trying next...');
      continue;
    }
    break;
  }
  if (!res || !res.ok) { log.error('All Gemini keys failed'); return null; }
    const data = await res.json();
    const raw = (data?.candidates?.[0]?.content?.parts?.[0]?.text || '').trim();
    if (!raw) { log.error('Gemini empty response'); return null; }

    const lines = raw.split('\n');
    const titleLine = lines.find(l => l.trimStart().startsWith('TITLE:')) || '';
    const aiTitle = titleLine
      ? titleLine.replace(/^TITLE:\s*/i, '').trim().slice(0, 120)
      : (lines.find(l => l.trim().length > 10 && !l.trim().startsWith('SUMMARY:')) || '').trim().slice(0, 120);

    const summaryLine = lines.find(l => l.trimStart().startsWith('SUMMARY:')) || '';
    const aiSummary = summaryLine.replace(/^SUMMARY:\s*/i, '').trim().slice(0, 280);

    let aiContent = '';
    const startIdx = lines.findIndex(l => l.trim() === 'ARTICLE_START');
    const endIdx   = lines.findIndex(l => l.trim() === 'ARTICLE_END');
    if (startIdx !== -1) {
      aiContent = lines.slice(startIdx + 1, endIdx > startIdx ? endIdx : undefined).join('\n').trim();
    }
    if (!aiContent) {
      const summaryIdx = lines.findIndex(l => l.trimStart().startsWith('SUMMARY:'));
      if (summaryIdx !== -1) {
        aiContent = lines.slice(summaryIdx + 1)
          .filter(l => l.trim() !== 'ARTICLE_START' && l.trim() !== 'ARTICLE_END')
          .join('\n').trim();
      }
    }
    if (!aiContent) {
      aiContent = lines.slice(2)
        .filter(l => l.trim() !== 'ARTICLE_START' && l.trim() !== 'ARTICLE_END')
        .join('\n').trim();
    }

    if (!aiTitle) { log.error('No TITLE in Gemini response'); return null; }
    const wordCount = aiContent.trim().split(/\s+/).length;
    const hasHeading = aiContent.includes('##') || aiContent.includes('\n\n');
    if (!aiContent || wordCount < 50 || (!hasHeading && wordCount < 100)) {
      log.error('Gemini body too short (' + wordCount + ' words)');
      return null;
    }
  for (const key of apiKeys) {
    res = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + key,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.65, maxOutputTokens: 2000 },
        }),
        signal: AbortSignal.timeout(60_000),
      }
    );
    if (res.ok) break;
    if (res.status === 429) {
      log.error('Key ...' + key.slice(-6) + ' hit 429 — trying next...');
      continue;
    }
    break;
  }
  if (!res || !res.ok) { log.error('All Gemini keys failed'); return null; }
    const data = await res.json();
    const raw = (data?.candidates?.[0]?.content?.parts?.[0]?.text || '').trim();
    if (!raw) { log.error('Gemini empty response'); return null; }

    const lines = raw.split('\n');
    const titleLine = lines.find(l => l.trimStart().startsWith('TITLE:')) || '';
    const aiTitle = titleLine
      ? titleLine.replace(/^TITLE:\s*/i, '').trim().slice(0, 120)
      : (lines.find(l => l.trim().length > 10 && !l.trim().startsWith('SUMMARY:')) || '').trim().slice(0, 120);

    const summaryLine = lines.find(l => l.trimStart().startsWith('SUMMARY:')) || '';
    const aiSummary = summaryLine.replace(/^SUMMARY:\s*/i, '').trim().slice(0, 280);

    let aiContent = '';
    const startIdx = lines.findIndex(l => l.trim() === 'ARTICLE_START');
    const endIdx   = lines.findIndex(l => l.trim() === 'ARTICLE_END');
    if (startIdx !== -1) {
      aiContent = lines.slice(startIdx + 1, endIdx > startIdx ? endIdx : undefined).join('\n').trim();
    }
    if (!aiContent) {
      const summaryIdx = lines.findIndex(l => l.trimStart().startsWith('SUMMARY:'));
      if (summaryIdx !== -1) {
        aiContent = lines.slice(summaryIdx + 1)
          .filter(l => l.trim() !== 'ARTICLE_START' && l.trim() !== 'ARTICLE_END')
          .join('\n').trim();
      }
    }
    if (!aiContent) {
      aiContent = lines.slice(2)
        .filter(l => l.trim() !== 'ARTICLE_START' && l.trim() !== 'ARTICLE_END')
        .join('\n').trim();
    }

    if (!aiTitle) { log.error('No TITLE in Gemini response'); return null; }
    const wordCount = aiContent.trim().split(/\s+/).length;
    const hasHeading = aiContent.includes('##') || aiContent.includes('\n\n');
    if (!aiContent || wordCount < 50 || (!hasHeading && wordCount < 100)) {
      log.error('Gemini body too short (' + wordCount + ' words)');
      return null;
    }
    const finalSummary = aiSummary || aiContent.split(/[.!?]/)[0].trim().slice(0, 260);
    log.ai('Gemini OK — ' + wordCount + ' words');
    return { title: aiTitle, summary: finalSummary, content: aiContent };
  } catch (e) {
    log.error('Gemini error: ' + e);
    return null;
  }
}

// ─── Gemini image ─────────────────────────────────────────────────────────────
async function generateAndUploadImage(title, category) {
  const apiKey   = process.env.GEMINI_API_KEY;
  const bucket   = process.env.S3_BUCKET_NAME;
  const region   = process.env.AWS_REGION || 'us-east-1';
  const cfDomain = process.env.CLOUDFRONT_DOMAIN || '';

  const fallback = () => {
    const seed = Math.floor(Math.random() * 900) + 100;
    return { imageUrl: 'https://picsum.photos/seed/' + seed + '/1200/630', imageKey: 'picsum/' + seed };
  };

  if (!apiKey || !bucket) { log.error('Missing GEMINI_API_KEY or S3_BUCKET_NAME'); return fallback(); }

  const styleMap = {
    'AI':          'futuristic neural network, glowing blue nodes, dark background, no text',
    'Security':    'cybersecurity concept, digital lock, red circuit patterns, dark background, no text',
    'Cloud':       'cloud computing servers, soft blue lighting, data center, no text',
    'Tools':       'developer tools, code editor dark theme, clean workspace, no text',
    'Web':         'modern web UI components, colorful minimal interface design, no text',
    'Mobile':      'smartphone app interface, clean product shot, gradient background, no text',
    'Open Source': 'open source collaboration, glowing code, network nodes, dark theme, no text',
    'Startups':    'startup growth chart, modern minimal office concept, no text',
  };

  const style = styleMap[category] || 'modern technology concept, professional, clean, no text';
  const imgPrompt = 'Professional tech blog featured image for: "' + title + '". Style: ' + style + '. Wide 16:9, photorealistic, no text, no watermarks.';

  log.ai('Generating image for: "' + title.slice(0, 55) + '..."');
  try {
    const res = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=' + apiKey,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: imgPrompt }] }],
          generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
        }),
        signal: AbortSignal.timeout(45_000),
      }
    );
    if (!res.ok) { log.error('Image gen HTTP ' + res.status); return fallback(); }
    const data = await res.json();
    const part = data?.candidates?.[0]?.content?.parts?.find(p => p.inlineData?.data);
    if (!part?.inlineData?.data) { log.error('No image in Gemini response'); return fallback(); }

    const mimeType  = part.inlineData.mimeType || 'image/png';
    const imgBuffer = Buffer.from(part.inlineData.data, 'base64');
    const ext       = mimeType === 'image/jpeg' ? 'jpg' : 'png';
    const imageKey  = 'auto/news/' + Date.now() + '-' + Math.random().toString(36).slice(2) + '.' + ext;

    const s3 = new S3Client({
      region,
      credentials: {
        accessKeyId:     process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
      },
    });
    await s3.send(new PutObjectCommand({
      Bucket: bucket, Key: imageKey, Body: imgBuffer,
      ContentType: mimeType, CacheControl: 'public, max-age=31536000',
    }));

    const imageUrl = cfDomain
      ? cfDomain.replace(/\/$/, '') + '/' + imageKey
      : 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + imageKey;

    log.ok('Image uploaded → ' + imageUrl.slice(0, 80));
    return { imageUrl, imageKey };
  } catch (e) {
    log.error('Image error: ' + e + ' — using fallback');
    return fallback();
  }
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  const runStart = Date.now();
  log.info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  log.info('Starting hourly news run — target: ' + TOTAL_ARTICLES_PER_RUN + ' articles');
  log.info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  if (!process.env.GEMINI_API_KEY) {
    log.error('GEMINI_API_KEY not set in /home/ubuntu/news-automation/.env');
    process.exit(1);
  }

  await connectDB();
  const News     = getNewsModel();
  const authorId = await getBotUserId();
  const items    = await collectTopItems();

  if (items.length === 0) { log.error('No RSS items found'); process.exit(1); }

  const stats = { total: items.length, inserted: 0, skipped: 0, failed: 0 };

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const n    = i + 1;

    console.log('');
    log.info(`━━━ Article ${n}/${items.length} ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    log.info(`Title: "${item.title.slice(0, 70)}"`);

    try {
      log.info(`[${n}]  STAGE 1/5 — Resolving URL...`);
      const realUrl = await resolveUrl(item.link);
      log.info(`[${n}] URL → ${realUrl.slice(0, 90)}`);

      const exists = await News.exists({ sourceUrl: realUrl });
      if (exists) { log.skip(`[${n}] Already in DB — skipping`); stats.skipped++; continue; }

      log.info(`[${n}]  STAGE 2/5 — Scraping...`);
      const scraped  = await scrapeText(realUrl);
      const bodyText = scraped && scraped.length > 300 ? scraped : item.description;
      if (!bodyText || bodyText.length < 60) { log.skip(`[${n}] No content — skipping`); stats.skipped++; continue; }
      log.info(`[${n}] Scraped ${bodyText.length} chars`);

      log.info(`[${n}] 烙 STAGE 3/5 — Gemini writing article...`);
      const t3 = Date.now();
      const ai = await rewriteWithGemini(item.title, bodyText, item.source, realUrl, item.category);
      log.info(`[${n}] Text done in ${((Date.now() - t3) / 1000).toFixed(1)}s`);
      if (!ai) { log.error(`[${n}] Gemini text failed — skipping`); stats.failed++; continue; }

      log.info(`[${n}]  STAGE 4/5 — Generating image...`);
      const t4 = Date.now();
      const { imageUrl, imageKey } = await generateAndUploadImage(ai.title || item.title, item.category);
      log.info(`[${n}] Image done in ${((Date.now() - t4) / 1000).toFixed(1)}s`);

      log.info(`[${n}]  STAGE 5/5 — Saving to DB...`);
      const wordCount = ai.content.trim().split(/\s+/).length;
      await News.create({
        title:       ai.title || item.title,
        summary:     ai.summary,
        content:     ai.content,
        tag:         item.category,
        tagColor:    TAG_COLORS[item.category] || '#6B7FD7',
        imageUrl,
        imageKey,
        source:      item.source,
        sourceUrl:   realUrl,
        readTime:    Math.max(1, Math.ceil(wordCount / 200)),
        featured:    false,
        published:   true,
        author:      authorId,
        contentType: 'news',
      });

      log.ok(`[${n}] ✅ PUBLISHED: "${(ai.title || item.title).slice(0, 65)}"`);
      stats.inserted++;

      if (i < items.length - 1) {
        log.info(`[${n}] ⏳ Waiting ${DELAY_BETWEEN_ARTICLES / 1000}s...`);
        await new Promise(r => setTimeout(r, DELAY_BETWEEN_ARTICLES));
      }
    } catch (err) {
      log.error(`[${n}] Unexpected error: ${err}`);
      stats.failed++;
    }
  }

  const elapsed = ((Date.now() - runStart) / 1000).toFixed(1);
  console.log('');
  log.info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  log.info(`Run complete in ${elapsed}s`);
  log.info(`  ✅ Published : ${stats.inserted}`);
  log.info(`  ⏭  Skipped   : ${stats.skipped}`);
  log.info(`  ❌ Failed    : ${stats.failed}`);
  log.info(`   Total     : ${stats.total}`);
  log.info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  await mongoose.disconnect();
  process.exit(0);
}

main().catch(err => {
  console.error('[FATAL]', err);
  process.exit(1);
});
ubuntu@ip-172-26-8-251:~$ 