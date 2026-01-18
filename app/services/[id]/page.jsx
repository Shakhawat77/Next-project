"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";

export default function ServiceDetailsPage({ params }) {
  const router = useRouter();

  // CRITICAL: Unwrap params using 'use' hook for Next.js 15
  const unwrappedParams = use(params);
  const id = unwrappedParams?.id;

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  // Fetch single service
  useEffect(() => {
    if (!id) return;

    const fetchService = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/services/${id}`);
        const result = await res.json();

        // Check for success property from your API
        if (res.ok && result.success) {
          setService(result.data);
        } else {
          setError(result.message || "Service not found");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch service data");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  // Handle booking
  const handleBooking = async () => {
    if (!service) return;

    setBookingLoading(true);
    setMessage("Processing your booking...");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: service._id,
          serviceImg:service.img,
          serviceName: service.serviceName,
          duration: service.duration,
          location: service.location,
          totalCost: service.totalCost,
          status: "Pending",
          createdAt: new Date(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage("Booking successful!");
        // Small delay so user can read the success message
        setTimeout(() => router.push("/"), 2000);
      } else {
        setMessage(data.message || "Booking failed.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      setMessage("Connection error. Please try again.");
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="text-center mt-20">
        <p className="text-red-600 text-xl font-semibold">
          {error || "Service not found"}
        </p>
        <button
          onClick={() => router.back()}
          className="mt-4 text-blue-600 hover:underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 ">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Hero Section */}
          <div className="relative h-72 md:h-[450px]">
            <img
              src={service.img}
              alt={service.serviceName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
              <h1 className="text-3xl md:text-5xl font-bold text-white p-8">
                {service.serviceName}
              </h1>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-8 md:p-12 space-y-10">
            {/* Price & Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">
                  Total Cost
                </p>
                <p className="text-4xl font-black text-gray-900 mt-1">
                  ৳ {service.totalCost}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-500 mb-2 font-medium">
                  Current Status
                </span>
                <span
                  className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide uppercase ${
                    service.status === "Pending"
                      ? "bg-amber-100 text-amber-700"
                      : service.status === "Confirmed"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {service.status || "Available"}
                </span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                <p className="text-xs font-bold text-blue-600 uppercase">
                  Duration
                </p>
                <p className="text-lg font-semibold text-gray-800 mt-1">
                  {service.duration}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <p className="text-xs font-bold text-gray-500 uppercase">
                  Location
                </p>
                <p className="text-lg font-semibold text-gray-800 mt-1">
                  {service.location}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <p className="text-xs font-bold text-gray-500 uppercase">
                  Care Type
                </p>
                <p className="text-lg font-semibold text-gray-800 mt-1">
                  Professional Home Care
                </p>
              </div>
            </div>

            {/* Booking Action Area */}
            <div className="pt-6 flex flex-col items-center">
              <button
                onClick={handleBooking}
                disabled={bookingLoading}
                className={`group relative w-full md:w-2/3 py-4 px-8 rounded-2xl font-bold text-lg transition-all 
                  ${
                    bookingLoading
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-200 active:scale-[0.98]"
                  }`}
              >
                {bookingLoading ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg
                      className="animate-spin h-5 w-5 text-gray-400"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing Booking...
                  </span>
                ) : (
                  "Confirm Booking Now"
                )}
              </button>

              {message && (
                <div
                  className={`mt-6 p-4 w-full md:w-2/3 rounded-xl text-center font-medium animate-in fade-in slide-in-from-top-2 ${
                    message.includes("failed") || message.includes("error")
                      ? "bg-red-50 text-red-700 border border-red-100"
                      : "bg-green-50 text-green-700 border border-green-100"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
