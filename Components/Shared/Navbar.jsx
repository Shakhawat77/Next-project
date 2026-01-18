"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-blue-600 text-white flex items-center justify-center font-semibold">
              C
            </div>
            <span className="text-lg font-semibold text-slate-900">
              CareBooking
            </span>
          </Link>

          {/* Center Menu */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/my-booking" className="hover:text-blue-600">My Booking</Link>
            <Link href="/bookings" className="hover:text-blue-600">Bookings</Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex gap-4">
            <Link href="/login" className="text-sm text-slate-600 hover:text-blue-600">
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Register
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-600"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2">
          <Link href="/services" className="block text-slate-700">Services</Link>
          <Link href="/my-booking" className="block text-slate-700">My Booking</Link>
          <Link href="/bookings" className="block text-slate-700">Bookings</Link>

          <div className="pt-4 flex gap-3">
            <Link href="/login" className="flex-1 text-center border border-slate-300 py-2 rounded-md">
              Login
            </Link>
            <Link href="/register" className="flex-1 text-center bg-blue-600 text-white py-2 rounded-md">
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
