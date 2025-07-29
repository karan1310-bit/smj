'use client';

import { Gem, Hammer, Receipt } from 'lucide-react';

export default function ShopHighlights() {
  const highlights = [
    {
      icon: <Gem className="w-8 h-8 text-[#6D1F16]" />,
      title: 'Hallmark Jewellery',
      description: 'Purity guaranteed, BIS certified',
    },
    {
      icon: <Hammer className="w-8 h-8 text-[#6D1F16]" />,
      title: 'Handcrafted Designs',
      description: 'Every piece made with expert detailing',
    },
    {
      icon: <Receipt className="w-8 h-8 text-[#6D1F16]" />,
      title: 'Transparent Pricing',
      description: 'No hidden charges, full clarity',
    },
  ];

  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-6 text-center">
          {highlights.map((item, idx) => (
            <article key={idx} className="flex flex-col items-center">
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-base font-semibold text-[#6D1F16]">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
