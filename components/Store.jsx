// app/components/KinnFlagshipHero.tsx
'use client';

import Image from 'next/image';

export default function KinnFlagshipHero() {
  return (
    <section className="relative w-full bg-white font-neue pt-8 md:pt-16">
      <div className="relative h-screen w-full">
        {/* Background image */}
        <Image
          src="/6.jpg" // Replace with your hero image
          alt="Shree Mahaveer Jewellers Ujjain"
          fill
          priority
          className="object-cover"
        />

        {/* Black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/20" />

        {/* Centered content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="mx-auto max-w-2xl md:max-w-4xl text-center text-white">
            <p className="text-sm md:text-2xl tracking-[0.2em] uppercase text-white/90">
              Ujjain
            </p>

            <h1 className="mt-2 md:mt-6 text-4xl md:text-7xl leading-none tracking-wide font-semibold drop-shadow-lg">
              Shree Mahaveer <span className="italic font-light">Jewellers</span>
            </h1>

            <p className="mx-auto mt-4 md:mt-4 max-w-lg text-base leading-tight text-white md:text-2xl drop-shadow-md">
               We invite you to visit our store in Ujjain for a personalized luxury experience.
            </p>

            <a
              href="#"
              className="mt-4 md:mt-8 inline-block border-b border-white/80 pb-1 text-xs md:text-2xl tracking-widest uppercase hover:border-white hover:text-white/90 transition"
            >
              Visit our store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
