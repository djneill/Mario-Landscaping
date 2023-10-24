import Image from 'next/image'
import { Inter } from 'next/font/google'
import yard from '../public/grassGarden.png'
import house from '../public/ranch.jpeg'
import ranch from '../public/ranch.jpeg'

const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen">
                <div className="relative h-full w-full bg-[url('/ranch.jpeg')] bg-no-repeat bg-center bg-fixed bg-cover"></div>
                {/* <Image src={house} alt="Your alt text" fill /> */}
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-green-600 text-shadow">Mario&apos;s Landscaping</h1>
                        <p className="mb-5 text-slate-300 text-shadow text-2xl">The grass is always greener on your side of the fence!</p>
                        <a href='#contact'><button className="btn btn-success">Request A Free Quote</button></a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Hero;
