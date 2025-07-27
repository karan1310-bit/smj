'use client';

import Image from 'next/image';

export default function HeroJoyOfJewelry() {
  return (
    <section className="relative w-full h-screen">
      {/* Hero Image */}
      <div className="relative w-full h-screen">
        <Image
          src="/3.png" 
          alt="Joy of Jewelry model image"
          fill
          className="object-cover object-[20%_70%] md:object-[30%_85%]"
          priority
        />

        {/* Overlay content */}
        <div className="absolute md:inset-0 bottom-24 flex flex-col items-center justify-center text-center">
          <h1 className="text-[#FFFFFF] text-[42px] sm:text-5xl md:text-8xl font-neue leading-none font-semibold md:mt-40 mb-2 md:mb-2 drop-shadow-lg">
            Shree Mahaveer Jewellers
          </h1>
          <p className="text-[#FFFFFF] font-neue text-base sm:text-base md:text-xl leading-tight px-4 md:max-w-md mb-3 md:mb-3">
            Ujjain’s trusted jewelers—where tradition meets contemporary design.
          </p>
          <button className="bg-[#FFFFFF] font-neue text-black text-base md:text-lg cursor-pointer font-medium md:px-6 px-4 py-2 md:py-3 rounded-md hover:bg-gray-100 transition">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
}