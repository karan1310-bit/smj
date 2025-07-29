import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProductDetail from '@/components/ProductDetail'
import React from 'react'

const page = () => {
  return (
    <main className='bg-[#FFFFFF] text-black font-neue'>
        <Navbar />
      <ProductDetail />
      <Footer />
    </main>
  )
}

export default page