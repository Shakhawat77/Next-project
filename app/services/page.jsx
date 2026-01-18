"use client";

import { useEffect, useState } from "react";
import ServiceCard from "./../../Components/Shared/servicesCard";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/services", { cache: "no-store" })

      .then((res) => res.json())
      .then((data) => {
        setServices(data.data || []);
        console.log(data);
        setLoading(false); // move here instead of .finally()
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // also handle error
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
<div className="min-h-screen bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 py-12">

    {/* Section Header */}
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold text-slate-900">
        Our Services
      </h1>
      <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
        Choose from our trusted home care services tailored to your needs
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service._id}
          service={service}
        />
      ))}
    </div>

  </div>
</div>

  );
}
