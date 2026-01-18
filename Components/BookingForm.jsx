"use client";

import { useState } from "react";

export default function BookingForm({ service }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: service._id,
          serviceName: service.serviceName,
          userName: name,
          userEmail: email,
          duration: service.duration,
          location: service.location,
          totalCost: service.totalCost,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Booking successful!");
      } else {
        setMessage(data.message || "Booking failed.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Booking failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleBooking}
      className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold text-center mb-4">Book This Service</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {loading ? "Booking..." : "Book Now"}
      </button>

      {message && <p className="text-center mt-2 text-green-600">{message}</p>}
    </form>
  );
}
