export interface OpenStatus {
  isOpen: boolean;
  label: string;
  nextInfo: string;
}

// Open every day: 10:00 AM – 11:30 PM (IST)
const OPEN_HOUR  = 10;
const OPEN_MIN   = 0;
const CLOSE_HOUR = 23;
const CLOSE_MIN  = 30;

export function getOpenStatus(): OpenStatus {
  const now    = new Date();
  const utc    = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist    = new Date(utc + 5.5 * 3600000);
  const curMins = ist.getHours() * 60 + ist.getMinutes();

  const openMins  = OPEN_HOUR  * 60 + OPEN_MIN;
  const closeMins = CLOSE_HOUR * 60 + CLOSE_MIN;

  if (curMins >= openMins && curMins < closeMins) {
    return {
      isOpen:   true,
      label:    "Open Now",
      nextInfo: "Closes at 11:30 PM",
    };
  }

  return {
    isOpen:   false,
    label:    "Closed",
    nextInfo: "Opens at 10:00 AM",
  };
}