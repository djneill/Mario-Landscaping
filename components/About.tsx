import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import house from '../public/house.png'

const About = () => {
    return (
        <div id='about' className="flex flex-col md:flex-row items-center bg-neutral-200 overflow-hidden">
            <div className="w-full md:w-1/2 transform -skew-x-12 overflow-hidden">
                <Image src={house} alt="Your Image" className="w-full transform skew-x-12" />
            </div>
            <div className="w-full md:w-1/2 p-2">
                <h2 className="text-2xl font-bold mx-auto mb-4 text-center text-black hidden md:block">About Us</h2>
                <p className="text-base font-bold mx-auto text-black">With roots dating back to 2019, we have proudly served the Troy, Temple, and Belton communities. Our extensive experience allows us to tackle a wide range of landscaping projects with confidence. We believe that every outdoor space is unique. Our team takes the time to understand your vision, preferences, and specific needs. Whether it&apos;s a residential garden or a commercial property, we tailor our services to create landscapes that resonate with you. Mario&apos;s Landscaping stands by the quality of our work. We don&apos;t just create landscapes; we build lasting relationships with our clients.</p>
                <p className="text-base font-bold mx-auto py-4 text-black">Join us in transforming ordinary spaces into extraordinary outdoor havens. Contact us today for a consultation!</p>
                <p className="text-base font-bold mx-auto py-4 text-black">Proudly servicing the Troy, Temple, and Belton Texas area since 2019.</p>
            </div>
        </div>
    )
}

export default About
