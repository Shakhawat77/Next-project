"use client";

import { useEffect, useState } from "react";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/bookings");
        const data = await res.json();

        if (res.ok) setBookings(data);
        else setError(data.message || "Failed to fetch bookings");
      } catch (err) {
        console.error(err);
        setError("Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading bookings...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
  <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
    All Bookings
  </h1>

  {bookings.length === 0 ? (
    <p className="text-center text-gray-500 mt-10">
      No bookings found.
    </p>
  ) : (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {bookings.map((booking) => (
        <div
          key={booking._id}
          className="bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Image */}
          {booking.serviceImg && (
            <div className="h-48 w-full overflow-hidden rounded-t-2xl">
              <img
                src={booking.serviceImg}
                alt={booking.serviceName}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 flex flex-col justify-between h-full">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {booking.serviceName}
            </h2>

            <div className="text-gray-600 text-sm space-y-1 mb-3">
              <p>
                <span className="font-medium">Duration:</span> {booking.duration}
              </p>
              <p>
                <span className="font-medium">Location:</span> {booking.location}
              </p>
              <p>
                <span className="font-medium">Cost:</span> ৳ {booking.totalCost}
              </p>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  booking.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : booking.status === "Confirmed"
                    ? "bg-green-100 text-green-800"
                    : booking.status === "Completed"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {booking.status}
              </span>

              <button
                className="px-4 py-1 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

  );
}
