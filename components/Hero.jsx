'use client';

import Image from 'next/image';

export default function HeroJoyOfJewelry() {
  return (
    <section className="relative w-full h-screen">
      {/* Hero Image */}
      <div className="relative w-full h-[700px] md:h-[730px]">
        <Image
          src="/3.png" 
          alt="Joy of Jewelry model image"
          fill
          className="object-cover object-[30%_75%]"
          priority
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-neue font-semibold mb-4 drop-shadow-lg">
            Joy of Jewelry
          </h1>
          <p className="text-white font-neue text-sm sm:text-base md:text-xl max-w-md mb-6">
            Crafted to complement your every moment, from the everyday sparkle to life's grandest celebrations.
          </p>
          <button className="bg-white font-neue text-black text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}