import { BsFacebook } from 'react-icons/bs'
import { PiInstagramLogoBold } from 'react-icons/pi'
import { FaRedditAlien } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-green-200 fixed z-[2]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='#about' className='hover:text-purple-700'>About</a></li>
                            <li><a href="#services" className='hover:text-purple-700'>Services</a></li>
                            <li><a href='#contact' className='hover:text-purple-700'>Contact Us</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-bold text-green-800">Mario&apos;s Landscaping</a>
                </div>
                <div className="navbar-center hidden lg:flex text-black">
                    <ul className="menu menu-horizontal px-1">
                        <li className=''><a href='#about' className='hover:text-purple-700'>About</a></li>
                        <li><a href='#services' className='hover:text-purple-700'>Services</a></li>
                        <li><a href='#contact' className='hover:text-purple-700'>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-2">
                        <a href='tel:2545552123' className="p-2 ">
                            <AiFillPhone className='text-[#ed2476] md:lg:text-2xl' />
                        </a>
                        <a href='' className="p-2 ">
                            <BsFacebook className="text-[#3b5998] md:lg:text-2xl" />
                        </a>
                        <a href='' className='p-2'>
                            <PiInstagramLogoBold className="text-[#c13584] md:lg:text-2xl" />
                        </a>
                        <a href='' className='p-2'>
                            <FaTwitter className='text-[#00acee] md:lg:text-2xl' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar