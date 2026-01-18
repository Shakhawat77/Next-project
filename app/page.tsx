

import React from "react";

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Compassionate Care, One Booking Away
        </h1>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Book trusted healthcare professionals for home care, appointments,
          and recovery services with ease.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
          Book Care Now
        </button>
      </section>

      {/* 2. About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Care Booking</h2>
        <p className="text-gray-600 leading-relaxed">
          Care Booking is a digital platform designed to simplify healthcare
          access. We help patients and families connect with certified doctors,
          nurses, and caregivers quickly and safely.
        </p>
      </section>

      {/* 3. Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">Home Nursing</h3>
            <p className="text-gray-600">
              Skilled nurses providing medical care in the comfort of your home.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">Doctor Visits</h3>
            <p className="text-gray-600">
              Schedule clinic or home appointments with experienced doctors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">Elderly Care</h3>
            <p className="text-gray-600">
              Compassionate daily care and support for seniors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">Physiotherapy</h3>
            <p className="text-gray-600">
              Recovery and rehabilitation sessions by certified therapists.
            </p>
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-blue-600 text-4xl font-bold mb-2">1</div>
            <h3 className="font-semibold mb-2">Choose Service</h3>
            <p className="text-gray-600">
              Select the type of care you or your loved one needs.
            </p>
          </div>

          <div>
            <div className="text-blue-600 text-4xl font-bold mb-2">2</div>
            <h3 className="font-semibold mb-2">Book Schedule</h3>
            <p className="text-gray-600">
              Pick a date, time, and preferred professional.
            </p>
          </div>

          <div>
            <div className="text-blue-600 text-4xl font-bold mb-2">3</div>
            <h3 className="font-semibold mb-2">Receive Care</h3>
            <p className="text-gray-600">
              Get high-quality care delivered safely and on time.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Why Choose Care Booking?
        </h2>

        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <p className="mb-4">
            ✔ Verified & trained professionals
          </p>
          <p className="mb-4">
            ✔ Easy and secure booking process
          </p>
          <p className="mb-4">
            ✔ 24/7 customer support
          </p>
          <p>
            ✔ Trusted by families and healthcare providers
          </p>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>

        <div className="bg-white shadow-lg p-8 rounded-xl max-w-2xl mx-auto">
          <p className="text-gray-600 mb-4">
            “Care Booking helped us find a reliable nurse for my father.
            The process was smooth and stress-free.”
          </p>
          <h4 className="font-semibold">— Sarah M.</h4>
        </div>
      </section>

      {/* 7. Call To Action */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Care Journey Today
        </h2>
        <p className="mb-6">
          Quality healthcare is just a click away. Book now and feel the care.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
          Get Started
        </button>
      </section>

    </div>
  );
};



export default HomePage;