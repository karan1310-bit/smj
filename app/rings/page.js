import Footer from '@/components/Footer'
import MiaEarringsGrid from '@/components/Grid'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
        <main className='bg-[#FFFFFF] text-black font-neue'>
            <Navbar />
            <MiaEarringsGrid />
            <Footer />
         </main>   
  )
}

export default page