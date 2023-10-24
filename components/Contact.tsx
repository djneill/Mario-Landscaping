import React from 'react'
import Image from 'next/image'
import fb from '../public/fb.jpeg'
import { Inter } from 'next/font/google'

const Contact = () => {
    return (
        <div id='contact' className="flex flex-col md:flex-row lg:flex-row items-center justify-center">
            <div className="w-1/3 p-4">
                <Image
                    src={fb}
                    alt="Your Image"
                    className="rounded-full w-40 h-40 mx-auto"
                />
            </div>
            <div className="w-1/2 p-4">
                <h2 className="text-2xl font-bold text-center text-shadow">Contact Us</h2>
                <p className="text-base font-bold mx-auto text-white ">Call us today <a className='text-blue-600' href='tel:2545554321'>2545554321</a> or send a message below.</p>
                <form className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-600" htmlFor="email">Email:</label>
                        <input
                            className="border border-gray-300 rounded w-full p-2"
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Email Address'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600" htmlFor="subject">Subject:</label>
                        <input
                            className="border border-gray-300 rounded w-full p-2"
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder='Subject'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600" htmlFor="message">Message:</label>
                        <textarea
                            className="border border-gray-300 rounded w-full p-2"
                            id="message"
                            name="message"
                            placeholder='Message'
                            rows={5}
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-blue-500 text-white rounded p-2 mx-4 border-solid border-2 border-violet-600 shadow-xl"
                            type="submit"
                        >
                            Submit
                        </button>
                        <button
                            className="bg-blue-500 text-white rounded p-2 mx-4 border-solid border-2 border-violet-600"
                            type="reset"
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;
