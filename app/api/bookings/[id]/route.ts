import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

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

// PATCH /api/bookings/[id] — update status
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { status } = await req.json();
    if (!["pending", "confirmed", "cancelled"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }
    const client = await clientPromise;
    await client.db(DB).collection(COLL).updateOne(
      { _id: new ObjectId(params.id) },
      { $set: { status } }
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// DELETE /api/bookings/[id] — delete booking
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const client = await clientPromise;
    await client.db(DB).collection(COLL).deleteOne({ _id: new ObjectId(params.id) });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
