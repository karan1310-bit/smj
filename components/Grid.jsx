'use client';

import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Daisy Trail Diamond Stud Earrings',
    price: '₹22,845',
    tag: 'LOW MAKING CHARGE',
    imgSrc: '/6.jpg', // Replace with actual path or URL
  },
  {
    id: 2,
    name: 'Infinity Glow Pearl Hoop Earrings',
    price: '₹24,744',
    tag: 'LOW MAKING CHARGE',
    imgSrc: '/1.jpg',
  },
  {
    id: 3,
    name: 'Spring Daisy Diamond Stud Earrings',
    price: '₹15,024',
    tag: 'ONLY 1 LEFT IN STOCK',
    imgSrc: '/3.png',
  },
  {
    id: 4,
    name: 'Serene Petal Diamond Stud Earrings',
    price: '₹19,075',
    tag: 'LOW MAKING CHARGE',
    imgSrc: '/2.jpg',
  },
   {
    id: 5,
    name: 'Daisy Trail Diamond Stud Earrings',
    price: '₹22,845',
    tag: 'LOW MAKING CHARGE',
    imgSrc: '/6.jpg', // Replace with actual path or URL
  },
  {
    id: 6,
    name: 'Infinity Glow Pearl Hoop Earrings',
    price: '₹24,744',
    tag: 'LOW MAKING CHARGE',
    imgSrc: '/1.jpg',
  },
  {
    id: 7,
    name: 'Spring Daisy Diamond Stud Earrings',
    price: '₹15,024',
    tag: 'ONLY 1 LEFT IN STOCK',
    imgSrc: '/3.png',
  },
  {
    id: 8,
    name: 'Serene Petal Diamond Stud Earrings',
    price: '₹19,075',
    tag: 'LOW MAKING CHARGE',
    imgSrc: '/2.jpg',
  },
];

export default function MiaEarringsGrid() {
  return (
    <section className="w-full min-h-screen mt-10 bg-white px-4 sm:px-6 md:px-16 py-8">
      <div className="max-w-9xl md:max-w-9xl mx-auto">

        <nav className="text-base text-gray-500 mb-2 md:mb-4">
          <ol className="list-reset flex space-x-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Earrings</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Earrings</h1>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="px-4 py-2 border text-sm rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Sort
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
