import React from 'react'
import Image from 'next/image'
import Hero from '@/components/Hero'
import HeroSmall from '@/components/HeroSmall'
import Navbar from '@/components/Navbar'
import ServiceCard from '@/components/ServiceCard'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'


import mow from '@/public/mower.png'
import eat from '@/public/eater.png'
import mulch from '@/public/mulch.png'
import garden from '@/public/garden.png'
import commercial from '@/public/commercial.png'
import custom from '@/public/customYard.png'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id='services' className="grid text-center align-middle mx-auto p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
        <div className="span-col-1 mx-auto">
          <ServiceCard
            imageSrc={mow}
            title='Lawn Mowing'
          />
        </div>
        <div className="span-col-1 mx-auto text-sm">
          <ServiceCard
            imageSrc={eat}
            title='Weed Control'
          />
        </div>
        <div className="span-col-1 mx-auto">
          <ServiceCard
            imageSrc={mulch}
            title='Mulching'
          />
        </div>
        <div className="span-col-1 mx-auto">
          <ServiceCard
            imageSrc={garden}
            title='Gardening'
          />
        </div>
        <div className="span-col-1 mx-auto">
          <ServiceCard
            imageSrc={commercial}
            title='Commercial'
          />
        </div>
        <div className="span-col-1 mx-auto">
          <ServiceCard
            imageSrc={custom}
            title='Custom Projects'
          />
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </>
  )
}
