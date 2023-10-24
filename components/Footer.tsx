'use client'
import React, { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import logo from "../public/mowerLogoK.png"
import Image from "next/image"
import { BsFillPhoneFill, BsFacebook } from "react-icons/bs"
import { PiInstagramLogoBold } from "react-icons/pi"
import { FaTwitter } from "react-icons/fa"

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    // Update the year when the component mounts
    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])

    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <aside className="items-center grid-flow-col">
                <Image
                    src={logo}
                    alt="Your Image"
                    className="fill-current w-36 h-36"
                />

                <p>
                    Copyright © <span id="displayYear">{currentYear}</span> - All right reserved
                </p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href='tel:2545552123' className="p-2 ">
                    <BsFillPhoneFill className='text-[#ed2476] text-2xl' />
                </a>
                <a href='' className="p-2 ">
                    <BsFacebook className="text-[#3b5998] text-2xl" />
                </a>
                <a href='' className='p-2'>
                    <PiInstagramLogoBold className="text-[#c13584] text-2xl" />
                </a>
                <a href='' className='p-2'>
                    <FaTwitter className='text-[#00acee] text-2xl' />
                </a>
            </nav>
        </footer>
    )
}

export default Footer;
