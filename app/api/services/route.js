
import clientPromise from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;

    // Database name
    const db = client.db("Booking-Care");

    // Collection name
    const itemsCollection = db.collection("items");

    // Get all documents
    const items = await itemsCollection.find({}).toArray();

    return NextResponse.json({
      success: true,
      data: items,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "MongoDB connection failed" },
      { status: 500 }
    );
  }
}
