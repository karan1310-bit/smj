'use client';

import { useState } from 'react';
import Image from 'next/image';

// 🧪 Static sample product
const product = {
  title: 'Elegant Gold Earrings',
  price: '₹22,499',
  category: 'Earrings',
  images: [
    '/1.jpg',
    '/2.jpg',
    '/6.jpg',
    '/b2.jpg',
    '/b4.jpg',
  ],
  descriptionPoints: [
    'Timeless elegance, handcrafted to perfection.',
    'These 22K BIS Hallmark-certified gold earrings feature an intricate floral motif that gracefully blends tradition with modern aesthetics. festive celebrations, or elevating your everyday look.',
    'Lightweight yet statement-worthy, these earrings are designed to offer unmatched comfort and luxury. Pair them with ethnic or fusion wear to make a lasting impression.',
  ],
};

export default function ProductDetail() {
  const [activeImg, setActiveImg] = useState(product.images[0]);

  return (
    <section className="w-full bg-white text-black min-h-screen font-neue px-4 md:px-16 pt-20 md:pt-20 md:pb-8 pb-8">
      <div className="max-w-9xl mx-auto space-y-10">

        {/* Breadcrumb */}
        <nav className="text-sm md:text-base text-gray-500">
          Home / {product.category} /{' '}
          <span className="text-black font-medium">{product.title}</span>
        </nav>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Image Preview */}
          <div className="space-y-6">
            <div className="relative w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden border border-gray-300">
              <Image
                src={activeImg}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-5 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(img)}
                  className={`relative aspect-square rounded-md overflow-hidden border ${
                    activeImg === img ? 'border-black' : 'border-gray-300'
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold">{product.title}</h1>

            <ul className="space-y-2 text-base md:text-lg max-w-xl text-gray-800 leading-relaxed">
              {product.descriptionPoints.map((point, i) => (
                <li key={i}>★  {point}</li>
              ))}
            </ul>

            <p className="text-3xl md:text-4xl font-semibold text-black mt-6">{product.price}</p>

            {/* Buttons */}
            <div className="pt-2 md:pt-4">
  <a
    href={`https://wa.me/12368805446?text=${encodeURIComponent(
      `Hi, I'm interested in buying "${product.title}" listed for ${product.price}. Is it available?`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full block text-center bg-black text-white font-medium py-4 rounded-md hover:bg-gray-800 transition"
  >
    Buy Now
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
