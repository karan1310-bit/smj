import FindYourPerfectMatch from '@/components/Category'
import HeroJoyOfJewelry from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className='bg-[#FFFFFF] text-black font-neue'>
      <Navbar />
      <HeroJoyOfJewelry />
      <FindYourPerfectMatch />
      <div className='h-screen bg-white'></div>
    </main>
  )
}

export default page