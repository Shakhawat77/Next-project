import clientPromise from "@/lib/dbConnect";
export async function POST(req) {
  try {
    const data = await req.json();

    const client = await clientPromise;
    const db = client.db("Booking-Care");

    const booking = {
      serviceId: data.serviceId,
      serviceName: data.serviceName,
      duration: data.duration,
      serviceImg:data.serviceImg,
      location: data.location,
      totalCost: data.totalCost,
      status: "Pending", // default status
      createdAt: new Date(),
    };
console.log(booking);
    const result = await db.collection("bookings").insertOne(booking);

    return new Response(JSON.stringify({ success: true, bookingId: result.insertedId }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, message: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}



export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("Booking-Care");

    const bookings = await db
      .collection("bookings")
      .find({})
      .sort({ createdAt: -1 }) // latest first
      .toArray();

    return new Response(JSON.stringify(bookings), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Failed to fetch bookings" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

