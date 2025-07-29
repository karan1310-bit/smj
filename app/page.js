import FindYourPerfectMatch from '@/components/Category'
import Footer from '@/components/Footer'
import HeroJoyOfJewelry from '@/components/Hero'
import Navbar from '@/components/Navbar'
import NewArrivals from '@/components/NewCollection'
import KinnFlagshipHero from '@/components/Store'
import TanishqCollections from '@/components/ThreeSection'

import React from 'react'

const page = () => {
  return (
    <main className='bg-[#FFFFFF] text-black font-neue'>
      <Navbar />
      <HeroJoyOfJewelry />
      <FindYourPerfectMatch />
      <TanishqCollections />
      <NewArrivals />
 
      <KinnFlagshipHero />
      <Footer />
    </main>
  )
}

export default page