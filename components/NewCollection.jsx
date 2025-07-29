'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const products = [
 {
    id: 1,
    brand: 'Kate Spade',
    name: 'Set of Pure charm',
    price: '$68.00',
    image: '/b2.jpg',
    alt: 'Rose gold bangle with stones',
    isNew: true,
  },
  {
    id: 2,
    brand: 'SATYA',
    name: 'I Am  Spinner Ring',
    price: '$129.00',
    image: '/e1.jpg',
    alt: 'Gold spinner ring',
  },
  {
    id: 3,
    brand: 'Wanderlust + Co',
    name: 'Charm Huggie Earrings',
    price: '$55.00',
    image: '/r1.jpg',
    alt: 'Gold huggie earrings with sun charm',
  },
  {
    id: 5,
    brand: 'Kate Spade',
    name: 'Set of love',
    price: '$68.00',
    image: '/n2.jpg',
    alt: 'Rose gold bangle stones',
    isNew: true,
  },
  {
    id: 6,
    brand: 'SATYA',
    name: 'I Am Loved Spinner Ring',
    price: '$129.00',
    image: '/e3.jpg',
    alt: 'Gold spinner ring',
  },
  {
    id: 7,
    brand: 'Wanderlust + Co',
    name: 'Sunseeker Charm Huggie Earrings',
    price: '$55.00',
    image: '/b5.jpg',
    alt: 'Gold huggie earrings with sun charm',
  },
  {
    id: 8,
    brand: 'SATYA',
    name: 'I Am Loved Ring',
    price: '$129.00',
    image: '/b3.jpg',
    alt: 'Gold spinner ring',
  },
  {
    id: 9,
    brand: 'Wanderlust + Co',
    name: 'Sunseeker Charm Earrings',
    price: '$55.00',
    image: '/b4.jpg',
    alt: 'Gold huggie earrings with sun charm',
  },
];

export default function NewArrivals() {
  const trackRef = useRef(null);

  const scrollBy = (delta) => {
    trackRef.current?.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#FFFFFF] font-neue">
      <div className="px-4 md:px-16">
        {/* Header */}
        <div className="flex flex-col gap-2 md:gap-6 pt-2 text-center md:text-start md:flex-row md:items-start md:justify-between md:pt-14">
          <div>
            <h1 className="text-[32px] sm:text-[40px] md:text-6xl text-gray-900">
              New Arrivals
            </h1>
            <p className="max-w-xl mt-0 text-base md:text-lg text-gray-600">
              Explore our curated collection of the latest styles.
            </p>
          </div>
          <div className="pt-1 md:pt-2">
            <a
              href="#"
              className="inline-flex items-center justify-center border border-gray-900 px-4 py-3 text-sm md:text-base tracking-wide uppercase text-gray-900 transition hover:bg-gray-900 hover:text-white"
            >
              Shop All New Arrivals
            </a>
          </div>
        </div>

        {/* Horizontal scroller */}
        <div className="relative mt-8 md:mt-14">
          {/* Gradients */}
     

          {/* Arrows */}
          <button
            aria-label="Scroll left"
            onClick={() => scrollBy(-300)}
            className="hidden md:flex items-center justify-center absolute left-0 top-[38%] z-20 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md border border-gray-300 hover:bg-gray-100 transition"
          >
            <span className="text-xl text-gray-700">‹</span>
          </button>

          <button
            aria-label="Scroll right"
            onClick={() => scrollBy(300)}
            className="hidden md:flex items-center justify-center absolute right-0 top-[38%] z-20 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md border border-gray-300 hover:bg-gray-100 transition"
          >
            <span className="text-xl text-gray-700">›</span>
          </button>

          {/* Product list */}<Link href="/product/1"> 
          <ul
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 py-2 sm:px-3 scroll-smooth scrollbar-hide"
          > 
            {products.map((p) => (
              <li
                key={p.id}
                className="snap-start flex-shrink-0 bg-white"
                style={{ minWidth: '260px' }}
              >
                <article className="flex flex-col">
                  <div className="relative w-full">
                    <div className="relative aspect-square w-full h-fit">
                      <Image
                        src={p.image}
                        alt={p.alt}
                        fill
                        className="object-cover aspect-square"
                        priority={p.id === 1}
                      />
                    </div>
                    {p.isNew && (
                      <span className="absolute left-2 top-2 bg-[#c5a66b] px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white rounded">
                        New
                      </span>
                    )}
                  </div>
                  <div className="pb-6 pt-3">
                    <p className="mt-1 text-base text-gray-900">{p.name}</p>
                    <p className="mt-1 text-base text-gray-900">{p.price}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul></Link>
        </div>

      </div>
    </section>
  );
}
