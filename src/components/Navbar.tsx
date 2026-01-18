"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const isLoggedIn = false;
  const isAdmin = false;

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <h1 className="text-xl font-bold text-blue-600">LabCare</h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-600" >Home</Link>
          <Link href="/services" className="hover:text-blue-600 ">Services</Link>
          <Link href="/book-test" className="hover:text-blue-600">Book Test</Link>

          {!isLoggedIn && (
            <>
              <Link href="/login" className="hover:text-blue-600">Login</Link>
              <Link href="/sign-up" className="hover:text-blue-600">Register</Link>
            </>
          )}

          {isLoggedIn && !isAdmin && <Link href="/dashboard">Dashboard</Link>}

          {isAdmin && <Link href="/admin">Admin</Link>}
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(true)}>
          ☰
        </button>
      </nav>

      {/* MOBILE MENU MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
          <div className="absolute top-0 right-0 w-4/5 h-full bg-white p-6 flex flex-col space-y-6">
            {/* CLOSE BUTTON */}
            <button
              className="self-end text-2xl font-bold"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/book-test" onClick={() => setOpen(false)}>
              Book Test
            </Link>

            {!isLoggedIn && (
              <>
                <Link href="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
                <Link href="/sign-up" onClick={() => setOpen(false)}>
                  Register
                </Link>
              </>
            )}

            {isLoggedIn && !isAdmin && (
              <Link href="/dashboard" onClick={() => setOpen(false)}>
                Dashboard
              </Link>
            )}

            {isAdmin && (
              <Link href="/admin" onClick={() => setOpen(false)}>
                Admin
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
