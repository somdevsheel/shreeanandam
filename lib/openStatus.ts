// lib/openStatus.ts
// Returns whether the restaurant is currently open based on real time

export interface OpenStatus {
  isOpen: boolean;
  label: string;       // e.g. "Open Now" or "Closed"
  nextInfo: string;    // e.g. "Opens at 7:00 PM" or "Closes at 3:30 PM"
}

// Schedule: [dayOfWeek (0=Sun,6=Sat)]: [[openHour, openMin, closeHour, closeMin], ...]
const SCHEDULE: Record<number, [number, number, number, number][]> = {
  0: [[11, 0, 16, 0], [18, 30, 23, 30]], // Sunday
  1: [[11, 0, 15, 30], [19, 0, 23, 0]],  // Monday
  2: [[11, 0, 15, 30], [19, 0, 23, 0]],  // Tuesday
  3: [[11, 0, 15, 30], [19, 0, 23, 0]],  // Wednesday
  4: [[11, 0, 15, 30], [19, 0, 23, 0]],  // Thursday
  5: [[11, 0, 15, 30], [19, 0, 23, 0]],  // Friday
  6: [[11, 0, 16, 0], [18, 30, 23, 30]], // Saturday
};

function fmt(h: number, m: number): string {
  const period = h >= 12 ? "PM" : "AM";
  const hour   = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${hour}:${m.toString().padStart(2, "0")} ${period}`;
}

export function getOpenStatus(): OpenStatus {
  // Use IST (UTC+5:30)
  const now     = new Date();
  const utc     = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist     = new Date(utc + 5.5 * 3600000);
  const day     = ist.getDay();
  const curMins = ist.getHours() * 60 + ist.getMinutes();

  const slots = SCHEDULE[day] || [];

  for (const [oh, om, ch, cm] of slots) {
    const openMins  = oh * 60 + om;
    const closeMins = ch * 60 + cm;

    if (curMins >= openMins && curMins < closeMins) {
      return {
        isOpen:   true,
        label:    "Open Now",
        nextInfo: `Closes at ${fmt(ch, cm)}`,
      };
    }
  }

  // Find next opening slot today or tomorrow
  for (const [oh, om] of slots) {
    const openMins = oh * 60 + om;
    if (curMins < openMins) {
      return {
        isOpen:   false,
        label:    "Closed",
        nextInfo: `Opens at ${fmt(oh, om)}`,
      };
    }
  }

  // Check tomorrow
  const tomorrowSlots = SCHEDULE[(day + 1) % 7] || [];
  if (tomorrowSlots.length > 0) {
    const [oh, om] = tomorrowSlots[0];
    return {
      isOpen:   false,
      label:    "Closed",
      nextInfo: `Opens tomorrow at ${fmt(oh, om)}`,
    };
  }

  return { isOpen: false, label: "Closed", nextInfo: "" };
}