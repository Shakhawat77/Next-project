import { NextResponse } from "next/server";
import clientPromise from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    // CRITICAL: In Next.js 15, params must be awaited
    const { id } = await params;

    // 1. Validate the ID exists and is a valid MongoDB ObjectId format
    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid ID format" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Booking-Care");

    // 2. Fetch from database
    const service = await db
      .collection("items")
      .findOne({ _id: new ObjectId(id) });

    // 3. Handle document not found
    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found in database" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: service,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}