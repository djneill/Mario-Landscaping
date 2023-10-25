import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import house from '../public/house.png'

const About = () => {
    return (
        <div id='about' className="flex items-center bg-neutral-200">
            <div className="w-1/2 transform -skew-x-12 overflow-hidden">
                <Image src={house} alt="Your Image" className="w-full transform skew-x-12" />
            </div>
            <div className="w-1/2 p-2">
                <h2 className="text-2xl font-bold mx-auto mb-4 text-center text-black hidden md:block">About Us</h2>
                <p className="text-base font-bold mx-auto text-black">Our focus is creating great landscape experiences. By consistently exceeding client expectations</p>
                <p className="text-base font-bold mx-auto text-black">Proudly servicing the Troy, Temple, and Belton area since 2019.</p>
            </div>
        </div>
    )
}

export default About
