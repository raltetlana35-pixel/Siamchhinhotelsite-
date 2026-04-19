import React from "react";

export default function SeasonsHotelWebsite() { return ( <div className="font-sans text-gray-800"> {/* HERO */} <section className="h-screen bg-[url('https://images.unsplash.com/photo-1501117716987-c8e1ecb21009')] bg-cover bg-center flex items-center justify-center text-white"> <div className="bg-black/50 p-10 rounded-2xl text-center max-w-2xl"> <h1 className="text-5xl font-bold mb-4">Seasons Hotel Lunglei</h1> <p className="text-lg mb-6">Luxury, comfort, and breathtaking sunset views in the heart of Lunglei</p> <button className="bg-yellow-500 px-6 py-3 rounded-xl text-black font-semibold hover:bg-yellow-400">Book Now</button> </div> </section>

{/* ABOUT */}
  <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" className="rounded-2xl shadow-lg" />
    <div>
      <h2 className="text-3xl font-bold mb-4">Your Peaceful Escape in Lunglei</h2>
      <p className="mb-4">
        Seasons Hotel offers a perfect blend of comfort, affordability, and scenic beauty. Located near the main road, it provides easy access to the town while maintaining a quiet and relaxing environment.
      </p>
      <p>
        Guests love our clean rooms, cozy balconies with sunset views, and complimentary breakfast. Whether you're traveling for business or leisure, Seasons Hotel delivers a warm and welcoming experience.
      </p>
    </div>
  </section>

  {/* FEATURES */}
  <section className="bg-gray-100 py-16 px-6 md:px-20">
    <h2 className="text-3xl font-bold text-center mb-10">Why Guests Love Us</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        "Clean & Hygienic Rooms",
        "Beautiful Sunset Balconies",
        "Free Breakfast & WiFi",
        "Peaceful & Quiet Stay",
        "Affordable Luxury",
        "Convenient Location",
      ].map((feature, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow">
          <p className="font-semibold">{feature}</p>
        </div>
      ))}
    </div>
  </section>

  {/* ROOMS */}
  <section className="py-16 px-6 md:px-20">
    <h2 className="text-3xl font-bold text-center mb-10">Rooms & Pricing</h2>
    <div className="grid md:grid-cols-2 gap-10">
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-2">Single Room</h3>
        <p className="mb-4">Cozy and comfortable, perfect for solo travelers.</p>
        <p className="font-bold">₹1000 - ₹1300 / night</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-2">Double Room</h3>
        <p className="mb-4">Spacious room with balcony and scenic views.</p>
        <p className="font-bold">Starting from ₹2100 / night</p>
      </div>
    </div>
  </section>

  {/* TESTIMONIALS */}
  <section className="bg-gray-100 py-16 px-6 md:px-20">
    <h2 className="text-3xl font-bold text-center mb-10">What Guests Say</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        "Clean rooms, complimentary breakfast, and great value for money.",
        "Beautiful balcony view of the sunset. Peaceful and quiet stay.",
        "Convenient location near main road with friendly staff.",
      ].map((review, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow">
          <p>\"{review}\"</p>
        </div>
      ))}
    </div>
  </section>

  {/* CTA */}
  <section className="py-20 text-center bg-black text-white">
    <h2 className="text-3xl font-bold mb-4">Ready to Experience Lunglei in Comfort?</h2>
    <p className="mb-6">Book your stay today and enjoy peaceful luxury at an affordable price.</p>
    <button className="bg-yellow-500 px-8 py-4 rounded-xl text-black font-semibold hover:bg-yellow-400">Reserve Your Room</button>
  </section>

  {/* FOOTER */}
  <footer className="py-6 text-center text-sm text-gray-500">
    © 2026 Seasons Hotel Lunglei. All rights reserved.
  </footer>
</div>

); }
