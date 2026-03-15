import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { Booking } from "@/lib/types";

const DB   = "anandam";
const COLL = "bookings";

function isAdmin(req: NextRequest) {
  const username = req.headers.get("x-admin-username");
  const password = req.headers.get("x-admin-password");
  return (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  );
}

// POST /api/bookings — create booking (public)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, date, time, guests, request } = body;

    if (!name || !phone || !date || !time || !guests) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const booking: Booking = {
      name:      name.trim(),
      phone:     phone.trim(),
      date,
      time,
      guests,
      request:   request?.trim() || "",
      status:    "pending",
      createdAt: new Date().toISOString(),
    };

    const client = await clientPromise;
    const result = await client.db(DB).collection(COLL).insertOne(booking);

    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// GET /api/bookings — list all (admin only)
export async function GET(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const client   = await clientPromise;
    const bookings = await client.db(DB).collection(COLL)
      .find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json({ bookings });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
