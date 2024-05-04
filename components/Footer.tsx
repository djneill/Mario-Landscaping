'use client'
import React, { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import logo from "../public/mowerLogoK.png"
import Image from "next/image"
import { BsFacebook } from "react-icons/bs"
import { AiFillPhone } from 'react-icons/ai'
import { PiInstagramLogoBold } from "react-icons/pi"
import { FaTwitter } from "react-icons/fa"

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    // Update the year when the component mounts
    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])

    return (
        <footer className="footer items-center px-4 bg-neutral text-neutral-content">
            <aside className="items-center grid-flow-col">
                <Image
                    src={logo}
                    alt="Your Image"
                    className="fill-current w-16 h-16 md:w-36 md:h-36"
                />
                <div className="flex flex-col text-center">
                    <p>
                        Copyright © <span id="displayYear">{currentYear}</span> - All right reserved
                    </p>
                    <p>
                        Proudly made by <a className="text-cyan-400" href="https://djsconsulting.services/" target="_blank">DJ&apos;s Consulting</a>
                    </p>
                </div>
            </aside>
            <nav className="grid-flow-col gap-4 pb-4 md:place-self-center md:justify-self-end mx-auto">
                <a href='tel:2544216398' className=" ">
                    <AiFillPhone className='text-[#ed2476] text-2xl' />
                </a>
                <a href='' className=" ">
                    <BsFacebook className="text-[#3b5998] text-2xl" />
                </a>
                <a href='' className=''>
                    <PiInstagramLogoBold className="text-[#c13584] text-2xl" />
                </a>
                <a href='' className=''>
                    <FaTwitter className='text-[#00acee] text-2xl' />
                </a>
            </nav>
        </footer>
    )
}

export default Footer;
