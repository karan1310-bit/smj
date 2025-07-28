import Footer from '@/components/Footer'

import Navbar from '@/components/Navbar'
import RingGrid from '@/components/RingGrid'
import React from 'react'

const page = () => {
  return (
        <main className='bg-[#FFFFFF] text-black font-neue'>
            <Navbar />
            <RingGrid />
            <Footer />
         </main>   
  )
}

export default page