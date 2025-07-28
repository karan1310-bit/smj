'use client';

import Image from 'next/image';

const products = [
 {
    id: 1,
    brand: 'Kate Spade',
    name: 'Set of Pure charm',
    price: '$68.00',
    imgSrc: '/b2.jpg',
    alt: 'Rose gold bangle with stones',
    isNew: true,
  },
  {
    id: 2,
    brand: 'SATYA',
    name: 'I Am  Spinner Ring',
    price: '$129.00',
    imgSrc: '/e1.jpg',
    alt: 'Gold spinner ring',
  },
  {
    id: 3,
    brand: 'Wanderlust + Co',
    name: 'Charm Huggie Earrings',
    price: '$55.00',
    imgSrc: '/r1.jpg',
    alt: 'Gold huggie earrings with sun charm',
  },
  {
    id: 5,
    brand: 'Kate Spade',
    name: 'Set of love',
    price: '$68.00',
    imgSrc: '/n2.jpg',
    alt: 'Rose gold bangle stones',
    isNew: true,
  },
  {
    id: 6,
    brand: 'SATYA',
    name: 'I Am Loved Spinner Ring',
    price: '$129.00',
    imgSrc: '/e3.jpg',
    alt: 'Gold spinner ring',
  },
  {
    id: 7,
    brand: 'Wanderlust + Co',
    name: 'Sunseeker Charm Huggie Earrings',
    price: '$55.00',
    imgSrc: '/b5.jpg',
    alt: 'Gold huggie earrings with sun charm',
  },
  {
    id: 8,
    brand: 'SATYA',
    name: 'I Am Loved Ring',
    price: '$129.00',
    imgSrc: '/b3.jpg',
    alt: 'Gold spinner ring',
  },
  {
    id: 9,
    brand: 'Wanderlust + Co',
    name: 'Sunseeker Charm Earrings',
    price: '$55.00',
    imgSrc: '/b4.jpg',
    alt: 'Gold huggie earrings with sun charm',
  },
];

export default function RingGrid() {
  return (
    <section className="w-full min-h-screen mt-10 bg-white px-4 sm:px-6 md:px-16 py-12">
      <div className="max-w-9xl md:max-w-9xl mx-auto">

        <nav className="text-base text-gray-500 mb-2 md:mb-4">
          <ol className="list-reset flex space-x-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Rings</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Rings</h1>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="px-4 py-2 border text-sm rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Sort
            </button>
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="px-4 py-2 border text-sm rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Gender
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="relative w-full h-40 sm:h-72 md:h-80 rounded-t-xl overflow-hidden">
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  fill
                  className="object-cover object-center"
                />
                
              </div>
              <div className="px-2 md:px-4 py-3 md:py-5">
                
                <p className="text-sm md:text-base text-gray-600 mt-0">{item.name}</p>
                <p className="text-base md:text-xl font-semibold text-gray-800 mt-1">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
