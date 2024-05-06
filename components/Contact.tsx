'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import fb from '../public/fb2.jpeg'
import { Inter } from 'next/font/google'

const Contact = () => {
    const [status, setStatus] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.currentTarget;
            const formData = new FormData(myForm);

            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as any).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <div id='contact' className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
            <div className="p-4">
                <Image
                    src={fb}
                    alt="Your Image"
                    className="rounded-full w-40 h-40 mx-auto"
                />
            </div>
            <div className="p-4 mx-auto">
                <h2 className="text-2xl font-bold text-center text-shadow">Contact Us</h2>
                <p className="text-base font-bold mx-4 text-white">Call us today <a className='text-blue-600' href='tel:2544216398'>254-421-6398</a> or send a message below.</p>
                <form className="mt-4"
                    name="contact"
                    onSubmit={handleFormSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="mb-4 mx-4">
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
                    <div className="mb-4 mx-4">
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
                    <div className="mb-4 mx-4">
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
                            disabled={status === 'pending'}
                        >
                            Submit
                        </button>
                        {status === 'ok' && (
                            <div className="alert alert-success">
                                <SuccessIcon />
                                Submitted!
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="alert alert-error">
                                <ErrorIcon />
                                {error}
                            </div>
                        )}
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

function SuccessIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
function ErrorIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}

export default Contact;
