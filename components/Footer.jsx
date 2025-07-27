// app/components/Footer.jsx
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white text-sm md:text-base font-neue">
      <div className="max-w-[1320px] px-4 md:px-16 py-8 md:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-medium mb-0">Shree Mahaveer Jewellers</h2>
        </div>

        {/* Shop By */}
        <div>
          <h3 className="text-base font-semibold mb-3">Shop By</h3>
          <ul className="space-y-1 md:space-y-2 text-white/80">
            <li><Link href="#">Earrings</Link></li>
            <li><Link href="#">Necklaces</Link></li>
            <li><Link href="#">Bracelets</Link></li>
            <li><Link href="#">Rings</Link></li>
          </ul>
        </div>

        {/* About */}
        <div className=''>
          <h3 className="text-base font-semibold mb-3">About</h3>
          <ul className="space-y-1 md:space-y-2 text-white/80">
            <li><Link href="#">Jewelry Care</Link></li>
            <li><Link href="#">Our Designers</Link></li>
            <li><Link href="#">Stores</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base font-semibold mb-3">Contact</h3>
          <ul className="space-y-1 md:space-y-2 text-white/80">
            <li>
              <Link href="#" className=" underline-offset-2">
                Contact Us
              </Link>{' '}
              |{' '}
              <Link href="#" className=" underline-offset-2">
                Text Us
              </Link>
            </li>
            <li>1-877-478-0450</li>
            <li>
              <span className="">
                Mon – Fri: 10am – 7pm EST
                <br />
                Closed Sundays
              </span>
            </li>
          
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 sm:px-6 lg:px-8 py-4 text-xs text-white/70 text-center md:text-left md:flex md:justify-between md:items-center">
        <div className="mb-2 md:mb-0">
          © SMJ 2025
        </div>
        
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="h-10 w-10 bg-white text-black text-xl flex items-center justify-center rounded hover:bg-gray-100 shadow-sm"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
