import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import NeckGrid from '@/components/NeckGrid'

const page = () => {
  return (
        <main className='bg-[#FFFFFF] text-black font-neue'>
            <Navbar />
            <NeckGrid />
            <Footer />
         </main>   
  )
}

export default page