import { ObjectId } from "mongodb";

export type BookingStatus = "pending" | "confirmed" | "cancelled";

export interface Booking {
  _id?: ObjectId;       // MongoDB ObjectId — omit when inserting
  name: string;
  phone: string;
  date: string;         // YYYY-MM-DD
  time: string;         // e.g. "07:00 PM"
  guests: string;       // "1" | "2" | ... | "5+"
  request: string;
  status: BookingStatus;
  createdAt: string;    // ISO string
}

// Used in the admin panel where _id comes back as string from JSON
export interface BookingJSON {
  _id?: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  request: string;
  status: BookingStatus;
  createdAt: string;
}