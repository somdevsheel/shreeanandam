"use client";

import { useState } from "react";
import { restaurantInfo } from "@/data/restaurant";

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  request: string;
}

const TIME_SLOTS = [
  "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM",
  "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM",
  "03:00 PM",
  "07:00 PM", "07:30 PM",
  "08:00 PM", "08:30 PM",
  "09:00 PM", "09:30 PM",
  "10:00 PM", "10:30 PM",
];

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", date: "", time: "", guests: "", request: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Min date = today
  const today = new Date().toISOString().split("T")[0];

  function validate() {
    const e: Partial<FormData> = {};
    if (!form.name.trim())    e.name    = "Please enter your name";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
                              e.phone   = "Enter a valid 10-digit mobile number";
    if (!form.date)           e.date    = "Please select a date";
    if (!form.time)           e.time    = "Please select a time slot";
    if (!form.guests)         e.guests  = "Please select number of guests";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }

    // Build WhatsApp message
    const msg = [
      `🍽️ *Table Booking Request*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      `📅 *Date:* ${new Date(form.date).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}`,
      `🕐 *Time:* ${form.time}`,
      `👥 *Guests:* ${form.guests}`,
      form.request ? `📝 *Special Request:* ${form.request}` : "",
      ``,
      `_Sent from Anandam Sweets & Restaurant website_`,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(msg)}`;
    setSubmitted(true);
    window.open(url, "_blank");
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="font-display text-3xl text-saffron-400 mb-3">Booking Sent!</h2>
        <p className="text-amber-200/70 mb-2">Your booking request has been sent to WhatsApp.</p>
        <p className="text-amber-200/50 text-sm mb-8">We'll confirm your table shortly. See you soon!</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", date: "", time: "", guests: "", request: "" }); }}
          className="btn-primary"
        >
          Book Another Table
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl p-6 md:p-8" style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)" }}>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-saffron-500/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🍽️</span>
        </div>
        <h2 className="font-display text-2xl text-saffron-300 mb-1">Reserve Your Table</h2>
        <p className="text-amber-200/50 text-sm">Booking opens directly on WhatsApp</p>
      </div>

      <div className="space-y-5">

        {/* Name */}
        <div>
          <label className="block text-amber-200/70 text-sm font-medium mb-1.5">
            Your Name <span className="text-saffron-500">*</span>
          </label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full px-4 py-3 rounded-xl text-amber-100 placeholder-amber-200/30 outline-none transition-all
              focus:ring-2 focus:ring-saffron-500 ${errors.name ? "ring-2 ring-red-500" : ""}`}
            style={{ background: "#1c1008", border: "1px solid rgba(200,120,30,0.25)" }}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-amber-200/70 text-sm font-medium mb-1.5">
            Mobile Number <span className="text-saffron-500">*</span>
          </label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="10-digit mobile number"
            maxLength={10}
            className={`w-full px-4 py-3 rounded-xl text-amber-100 placeholder-amber-200/30 outline-none transition-all
              focus:ring-2 focus:ring-saffron-500 ${errors.phone ? "ring-2 ring-red-500" : ""}`}
            style={{ background: "#1c1008", border: "1px solid rgba(200,120,30,0.25)" }}
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-amber-200/70 text-sm font-medium mb-1.5">
              Date <span className="text-saffron-500">*</span>
            </label>
            <input
              type="date" name="date" value={form.date} onChange={handleChange}
              min={today}
              className={`w-full px-4 py-3 rounded-xl text-amber-100 outline-none transition-all
                focus:ring-2 focus:ring-saffron-500 ${errors.date ? "ring-2 ring-red-500" : ""}`}
              style={{ background: "#1c1008", border: "1px solid rgba(200,120,30,0.25)", colorScheme: "dark" }}
            />
            {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
          </div>

          <div>
            <label className="block text-amber-200/70 text-sm font-medium mb-1.5">
              Time Slot <span className="text-saffron-500">*</span>
            </label>
            <select
              name="time" value={form.time} onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl text-amber-100 outline-none transition-all
                focus:ring-2 focus:ring-saffron-500 ${errors.time ? "ring-2 ring-red-500" : ""}`}
              style={{ background: "#1c1008", border: "1px solid rgba(200,120,30,0.25)" }}
            >
              <option value="" className="bg-[#1c1008]">Select time</option>
              <optgroup label="Lunch" style={{ background: "#1c1008" }}>
                {TIME_SLOTS.slice(0, 9).map((t) => (
                  <option key={t} value={t} className="bg-[#1c1008]">{t}</option>
                ))}
              </optgroup>
              <optgroup label="Dinner" style={{ background: "#1c1008" }}>
                {TIME_SLOTS.slice(9).map((t) => (
                  <option key={t} value={t} className="bg-[#1c1008]">{t}</option>
                ))}
              </optgroup>
            </select>
            {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="block text-amber-200/70 text-sm font-medium mb-1.5">
            Number of Guests <span className="text-saffron-500">*</span>
          </label>
          <div className="grid grid-cols-5 gap-2">
            {["1", "2", "3", "4", "5+"].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => { setForm((p) => ({ ...p, guests: n })); setErrors((p) => ({ ...p, guests: undefined })); }}
                className={`py-3 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95
                  ${form.guests === n
                    ? "bg-saffron-500 text-white shadow-lg"
                    : "text-amber-200/60 hover:border-saffron-500 hover:text-saffron-400"
                  }`}
                style={form.guests !== n ? { background: "#1c1008", border: "1px solid rgba(200,120,30,0.25)" } : {}}
              >
                {n}
              </button>
            ))}
          </div>
          {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests}</p>}
        </div>

        {/* Special Request */}
        <div>
          <label className="block text-amber-200/70 text-sm font-medium mb-1.5">
            Special Request <span className="text-amber-400/40 font-normal">(optional)</span>
          </label>
          <textarea
            name="request" value={form.request} onChange={handleChange}
            placeholder="e.g. Birthday celebration, window seat, any allergies..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl text-amber-100 placeholder-amber-200/30 outline-none transition-all resize-none focus:ring-2 focus:ring-saffron-500"
            style={{ background: "#1c1008", border: "1px solid rgba(200,120,30,0.25)" }}
          />
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold text-lg py-4 rounded-2xl transition-all duration-200 active:scale-95 shadow-lg mt-2"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Send Booking on WhatsApp
        </button>

        <p className="text-center text-amber-200/30 text-xs">
          Tapping the button will open WhatsApp with your booking details pre-filled.
          We'll confirm your table as soon as possible.
        </p>
      </div>
    </div>
  );
}
