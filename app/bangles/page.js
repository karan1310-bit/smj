import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import BangleGrid from '@/components/BangleGrid'

const page = () => {
  return (
        <main className='bg-[#FFFFFF] text-black font-neue'>
            <Navbar />
            <BangleGrid />
            <Footer />
         </main>   
  )
}

export default page