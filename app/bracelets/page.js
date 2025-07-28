import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import BraceletGrid from '@/components/BraceletGrid'

const page = () => {
  return (
        <main className='bg-[#FFFFFF] text-black font-neue'>
            <Navbar />
            <BraceletGrid />
            <Footer />
         </main>   
  )
}

export default page