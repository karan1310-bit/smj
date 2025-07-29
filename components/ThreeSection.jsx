'use client';

import Image from 'next/image';

export default function TanishqCollections() {
  return (
    <section className="w-full bg-white font-neue px-4 sm:px-6 md:px-16 pt-4 pb-12 md::py-12">
      <div className="max-w-9xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[30px] leading-tight tracking-tight text-gray-900 sm:text-[40px] md:text-[48px]">
            Our Best Collections
          </h2>
          <p className="mt-1 text-lg sm:text-xl text-gray-700">
            Explore our newly launched collection
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left Tall Image */}
          <div className="w-full h-[250px] md:h-[500px] relative rounded-xl overflow-hidden">
            <Image
              src="/2.jpg" // left vertical image
              alt="Earring Box"
              className="object-cover"
              fill
            />
          </div>

          {/* Right Two Stacked Images */}
          <div className="flex flex-col gap-4 md:gap-2">
            {/* Top Image */}
            <div className="w-full h-[200px] md:h-[245px] relative rounded-xl overflow-hidden">
              <Image
                src="/1.jpg" // top-right image
                alt="Gold Earrings"
                className="object-cover"
                fill
              />
            </div>

            {/* Bottom Image */}
            <div className="w-full h-[200px] md:h-[245px] relative rounded-xl overflow-hidden">
              <Image
                src="/4.jpg" // bottom-right image
                alt="Jewelry Shot"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
