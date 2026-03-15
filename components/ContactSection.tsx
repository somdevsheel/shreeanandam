import { restaurantInfo } from "@/data/restaurant";

export default function ContactSection() {
  const { address, phone, phones, whatsapp, hours, mapEmbedUrl } = restaurantInfo;

  return (
    <section className="py-16 md:py-24" style={{ background: "#1c1008" }} id="contact">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">
          <p className="font-devanagari text-saffron-500 text-xl mb-2">हमसे मिलें</p>
          <h2 className="section-heading">Visit Us</h2>
          <div className="divider-ornament"><span className="text-saffron-500 text-lg">✦</span></div>
          <p className="section-subheading max-w-xl mx-auto">We're open every day. Come as you are — a table is always waiting.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left — Info cards */}
          <div className="space-y-5">

            {/* Address */}
            <div className="rounded-2xl p-6" style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)" }}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-saffron-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <LocationIcon />
                </div>
                <div>
                  <h3 className="font-display text-xl text-saffron-300 mb-2">Address</h3>
                  <p className="text-amber-200/70 leading-relaxed">
                    {address.line1}<br />{address.line2}<br />
                    {address.city}, {address.state} – {address.pin}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone — all 3 numbers */}
            <div className="rounded-2xl p-6" style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)" }}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-saffron-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <PhoneIcon />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-saffron-300 mb-3">Contact Numbers</h3>
                  <div className="space-y-2.5">
                    {phones.map((p) => (
                      <div key={p.number} className="flex items-center justify-between gap-4">
                        <span className="text-amber-400/60 text-xs uppercase tracking-wider w-24 flex-shrink-0">{p.label}</span>
                        <a
                          href={`tel:${p.number}`}
                          className="text-saffron-400 font-medium hover:text-saffron-300 hover:underline transition-colors text-base"
                        >
                          {p.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl p-6" style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)" }}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-saffron-900/50 flex items-center justify-center flex-shrink-0">
                  <ClockIcon />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-saffron-300 mb-3">Opening Hours</h3>
                  <div className="space-y-2">
                    {hours.map((h, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                        <span className="text-amber-200/80 font-medium text-sm">{h.days}</span>
                        <span className="text-amber-400/60 text-sm">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20Anandam%20Sweets%20%26%20Restaurant`}
                target="_blank" rel="noopener noreferrer"
                className="whatsapp-btn flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium py-3.5 px-6 rounded-full hover:bg-[#1ebe59] transition-colors active:scale-95"
              >
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
              <a href={`tel:${phone}`} className="btn-primary flex-1 justify-center">
                <PhoneIcon /> Call Now
              </a>
            </div>
          </div>

          {/* Right — Map */}
          <div className="rounded-2xl overflow-hidden h-[420px] md:h-full min-h-[420px]" style={{ border: "1px solid rgba(200,120,30,0.25)" }}>
            <iframe
              src={mapEmbedUrl}
              width="100%" height="100%"
              style={{ border: 0, minHeight: 420, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anandam Sweets & Restaurant Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return <svg className="w-5 h-5 text-saffron-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
}
function PhoneIcon() {
  return <svg className="w-5 h-5 text-saffron-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
}
function ClockIcon() {
  return <svg className="w-5 h-5 text-saffron-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
function WhatsAppIcon() {
  return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>;
}
