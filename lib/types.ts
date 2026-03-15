export type BookingStatus = "pending" | "confirmed" | "cancelled";

export interface Booking {
  _id?: string;
  name: string;
  phone: string;
  date: string;        // YYYY-MM-DD
  time: string;        // e.g. "07:00 PM"
  guests: string;      // "1" | "2" | ... | "5+"
  request: string;
  status: BookingStatus;
  createdAt: string;   // ISO string
}
