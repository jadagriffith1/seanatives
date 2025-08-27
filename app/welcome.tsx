"use client";

import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Stack spacing={2} direction="row">
        <Button variant="text">Home</Button>
        <Button variant="text">About</Button>
        <Button variant="text">Calendar</Button>
        <Button variant="text">Contact</Button>
        {/* <Button variant="contained">Calendar</Button>
        <Button variant="outlined">Charters</Button> */}
      </Stack>
      {/* Header / Nav */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-teal-600">SeaNatives</h1>
          <nav className="flex gap-4">
            <button className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-500 transition">
              View Calendar
            </button>
            <button className="px-4 py-2 bg-white border border-teal-600 text-teal-600 rounded hover:bg-teal-50 transition">
              Add Guest
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
      >
        <div className="bg-black bg-opacity-40 p-8 rounded text-center text-white max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Dive Into Adventure</h2>
          <p className="text-lg">
            Explore pristine dive sites, experience vibrant marine life, and
            create unforgettable memories with SeaNatives.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">What We Offer</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Guided Dives</h4>
            <p>
              Experienced instructors guide you through top dive spots, ensuring
              safety and fun for all levels.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Custom Packages</h4>
            <p>
              Flexible dive trips tailored to your schedule and interests,
              perfect for groups or solo adventurers.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Equipment & Safety</h4>
            <p>
              Top-of-the-line gear and strict safety protocols ensure a
              worry-free and memorable experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-teal-600 text-white py-8 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <h5 className="text-xl font-bold mb-2">Contact Us</h5>
          <p>Email: info@seanatives.com | Phone: +1 (555) 123-4567</p>
          <p className="mt-2">&copy; 2025 SeaNatives. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
