'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF] text-black px-4 md:px-12 py-3 md:py-3 flex justify-between items-center">
        <Link href="/">
        <h1 className='md:text-xl'>SMJ</h1>
        </Link>
        <button
          onClick={toggleMenu}
          className="text-3xl focus:outline-none z-[999] cursor-pointer"
          aria-label="Toggle menu"
        >
          <IoMdMenu />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-700 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 right-0 h-screen bg-[#FFFFFF] text-black z-50 shadow-2xl px-8 py-10 flex flex-col transition-transform duration-[800ms] ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '70vw', maxWidth: '500px' }}
      >
        {/* ✕ Close Icon Inside Panel */}
        <div className="flex justify-between items-center">
          <img
            src="/hero.png"
            alt="Logo"
            width={56}
            height={56}
            className="object-fill"
          />
          <button
            onClick={closeMenu}
            className="text-base md:text-2xl hover:text-gray-400 transition"
            aria-label="Close menu"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="mt-10 flex flex-col gap-4 text-sm md:text-base font-extralight uppercase">
          <Link href="/rings" onClick={closeMenu} className="hover:text-gray-400 transition border-b border-gray-300 pb-2">Rings</Link>
          <Link href="/rings" onClick={closeMenu} className="hover:text-gray-400 transition border-b border-gray-300 pb-2">Necklaces</Link>
          <Link href="/rings" onClick={closeMenu} className="hover:text-gray-400 transition border-b border-gray-300 pb-2">Earrings</Link>
          <Link href="/rings" onClick={closeMenu} className="hover:text-gray-400 transition border-b border-gray-300 pb-2">Chains</Link>
          <Link href="/rings" onClick={closeMenu} className="hover:text-gray-400 transition border-b border-gray-300 pb-2">Bracelet</Link>
          <Link href="/rings" onClick={closeMenu} className="hover:text-gray-400 transition border-b border-gray-300 pb-2">Bangles</Link>
        </nav>
      </aside>
    </>
  );
}