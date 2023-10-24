import Image from 'next/image';
import yard from '../public/grassGarden.jpeg';

const HeroSmall = () => {
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col-reverse lg:flex-row">
                    <div className="flex flex-col">
                        <h1 className="text-5xl font-bold text-green-800 text-shadow mx-auto">Lawn Jawn</h1>
                        <p className="py-6 text-shadow text-2xl">Professional lawn service with a happy ending!</p>
                        <p className='mb-5 text-white text-shadow text-2xl'>We&apos;ll trim your bush today!</p>
                        <button className="btn btn-primary">Request A Quote</button>
                    </div>
                    <Image src={yard} alt="Your alt text" className="max-w-md rounded-lg shadow-2xl" />
                </div>
            </div>
        </>
    )
}

export default HeroSmall;
