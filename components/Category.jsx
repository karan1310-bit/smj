
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "RINGS",
    src: "/r2.jpg",
    alt: "Earrings",
    width: 720,
    height: 900,
  },
  {
    id: 2,
    name: "EARRINGS",
    src: "/e2.jpg",
    alt: "Finger Rings",
    width: 720,
    height: 900,
  },
  {
    id: 3,
    name: "Bangles",
    src: "/b1.jpg",
    alt: "Pendants",
    width: 720,
    height: 900,
  },
  {
    id: 4,
    name: "NECKLACES",
    src: "/n2.jpg",
    width: 720,
    height: 900,
  },
  
];

export default function FindYourPerfectMatch() {
  return (
    <section
      aria-labelledby="perfect-match-heading"
      className="w-full bg-[#FFFFFF] text-neue"
    >
      <div className="mx-auto px-4 sm:px-6 py-12 md:pt-16 lg:px-16">
        {/* Headings */}
        <header className="text-center">
          <h1
            id="perfect-match-heading"
            className="text-[30px] leading-tight tracking-tight text-gray-900 sm:text-[40px] md:text-[48px]"
          >
            Find Your Perfect Match
          </h1>
          <p className="mt-1 text-lg sm:text-xl text-gray-700">
            Shop by Categories
          </p>
        </header>

        {/* Grid */}
        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-16">
          {categories.map((item) => (
          <article key={item.id} className="flex flex-col items-center">
            <Link href="/rings">
            <div className="w-full overflow-hidden aspect-square rounded-xl">
              {/* 
                Use fixed width/height from the design to keep aspect ratio consistent.
                If you want full responsive fill, wrap with relative + aspect-square and use `fill`.
              */}
              <Image
                src={item.src}
                alt="img"
                width={item.width}
                height={item.height}
                className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-[1.015]"
                priority={item.id <= 4} // first row prioritized
              />
            </div></Link>
            <h2 className="mt-2 text-center font-serif text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] tracking-[0.08em] text-gray-900 uppercase">
              {item.name}
            </h2>
          </article>
          ))}
        </div>
      </div>
    </section>
  );
}
