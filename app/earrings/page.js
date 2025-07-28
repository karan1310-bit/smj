import EarGrid from '@/components/EarGrid'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
        <main className='bg-[#FFFFFF] text-black font-neue'>
            <Navbar />
            <EarGrid />
            <Footer />
         </main>   
  )
}

export default page