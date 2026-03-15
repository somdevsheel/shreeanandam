"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  request: string;
}

const TIME_SLOTS = [
  "11:00 AM","11:30 AM","12:00 PM","12:30 PM",
  "01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM",
  "07:00 PM","07:30 PM","08:00 PM","08:30 PM",
  "09:00 PM","09:30 PM","10:00 PM","10:30 PM",
];

const FIELD = "w-full px-4 py-3 rounded-xl text-amber-100 placeholder-amber-200/30 outline-none transition-all focus:ring-2 focus:ring-saffron-500";
const FIELD_STYLE = { background: "#1c1008", border: "1px solid rgba(200,120,30,0.25)" };

export default function BookingForm() {
  const [form, setForm]       = useState<FormData>({ name:"", phone:"", date:"", time:"", guests:"", request:"" });
  const [errors, setErrors]   = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone]       = useState(false);
  const [serverErr, setServerErr] = useState("");

  const today = new Date().toISOString().split("T")[0];

  function validate() {
    const e: Partial<FormData> = {};
    if (!form.name.trim())  e.name   = "Please enter your name";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g,""))) e.phone = "Enter a valid 10-digit number";
    if (!form.date)         e.date   = "Please select a date";
    if (!form.time)         e.time   = "Please select a time";
    if (!form.guests)       e.guests = "Please select number of guests";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) setErrors(p => ({ ...p, [name]: undefined }));
  }

  async function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }

    setLoading(true);
    setServerErr("");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setDone(true);
    } catch (err: unknown) {
      setServerErr(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="text-center py-14 rounded-3xl" style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)" }}>
        <div className="text-6xl mb-5">🎉</div>
        <h2 className="font-display text-3xl text-saffron-400 mb-3">Booking Confirmed!</h2>
        <p className="text-amber-200/70 mb-1">Your table has been reserved successfully.</p>
        <p className="text-amber-200/50 text-sm mb-8">We'll be expecting you. See you soon at Anandam!</p>
        <button
          onClick={() => { setDone(false); setForm({ name:"", phone:"", date:"", time:"", guests:"", request:"" }); }}
          className="btn-primary"
        >
          Book Another Table
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl p-6 md:p-8" style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)" }}>
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-saffron-500/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🍽️</span>
        </div>
        <h2 className="font-display text-2xl text-saffron-300 mb-1">Reserve Your Table</h2>
        <p className="text-amber-200/50 text-sm">We'll have your table ready and waiting</p>
      </div>

      <div className="space-y-5">

        {/* Name */}
        <div>
          <label className="block text-amber-200/70 text-sm font-medium mb-1.5">Name <span className="text-saffron-500">*</span></label>
          <input type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="Your full name"
            className={`${FIELD} ${errors.name ? "ring-2 ring-red-500" : ""}`} style={FIELD_STYLE} />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-amber-200/70 text-sm font-medium mb-1.5">Mobile Number <span className="text-saffron-500">*</span></label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="10-digit number" maxLength={10}
            className={`${FIELD} ${errors.phone ? "ring-2 ring-red-500" : ""}`} style={FIELD_STYLE} />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-amber-200/70 text-sm font-medium mb-1.5">Date <span className="text-saffron-500">*</span></label>
            <input type="date" name="date" value={form.date} onChange={handleChange} min={today}
              className={`${FIELD} ${errors.date ? "ring-2 ring-red-500" : ""}`}
              style={{ ...FIELD_STYLE, colorScheme: "dark" }} />
            {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
          </div>
          <div>
            <label className="block text-amber-200/70 text-sm font-medium mb-1.5">Time <span className="text-saffron-500">*</span></label>
            <select name="time" value={form.time} onChange={handleChange}
              className={`${FIELD} ${errors.time ? "ring-2 ring-red-500" : ""}`} style={FIELD_STYLE}>
              <option value="" style={{ background: "#1c1008" }}>Select time</option>
              <optgroup label="── Lunch ──" style={{ background: "#1c1008" }}>
                {TIME_SLOTS.slice(0,9).map(t => <option key={t} value={t} style={{ background: "#1c1008" }}>{t}</option>)}
              </optgroup>
              <optgroup label="── Dinner ──" style={{ background: "#1c1008" }}>
                {TIME_SLOTS.slice(9).map(t => <option key={t} value={t} style={{ background: "#1c1008" }}>{t}</option>)}
              </optgroup>
            </select>
            {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="block text-amber-200/70 text-sm font-medium mb-1.5">Guests <span className="text-saffron-500">*</span></label>
          <div className="grid grid-cols-5 gap-2">
            {["1","2","3","4","5+"].map(n => (
              <button key={n} type="button"
                onClick={() => { setForm(p => ({ ...p, guests: n })); setErrors(p => ({ ...p, guests: undefined })); }}
                className={`py-3 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95
                  ${form.guests === n ? "bg-saffron-500 text-white shadow-lg" : "text-amber-200/60 hover:border-saffron-500 hover:text-saffron-400"}`}
                style={form.guests !== n ? { background: "#1c1008", border: "1px solid rgba(200,120,30,0.25)" } : {}}
              >{n}</button>
            ))}
          </div>
          {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests}</p>}
        </div>

        {/* Special Request */}
        <div>
          <label className="block text-amber-200/70 text-sm font-medium mb-1.5">
            Special Request <span className="text-amber-400/40 font-normal">(optional)</span>
          </label>
          <textarea name="request" value={form.request} onChange={handleChange}
            placeholder="Birthday, window seat, allergies..."
            rows={3}
            className={`${FIELD} resize-none`} style={FIELD_STYLE} />
        </div>

        {serverErr && (
          <div className="bg-red-900/30 border border-red-500/40 rounded-xl p-3 text-red-400 text-sm text-center">
            {serverErr}
          </div>
        )}

        {/* Submit */}
        <button type="button" onClick={handleSubmit} disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-saffron-500 hover:bg-saffron-400 disabled:opacity-60 text-white font-semibold text-lg py-4 rounded-2xl transition-all duration-200 active:scale-95 shadow-lg mt-2">
          {loading ? (
            <><svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Booking...</>
          ) : (
            <><span>🍽️</span> Confirm Reservation</>
          )}
        </button>

        <p className="text-center text-amber-200/30 text-xs">
          Your booking will be saved and our team will be ready for you.
        </p>
      </div>
    </div>
  );
}
