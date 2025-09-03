import React, { useState } from 'react'
import { assets } from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { BsSearch } from "react-icons/bs";
// import { HiOutlineHeart } from "react-icons/hi2";
// import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    let Links = [
        { name: 'HOME', link: '/' },
        { name: 'ABOUT', link: '/about' },
        { name: 'BLOGS', link: '/blogs' },
        { name: 'CAREERS', link: '/careers' },
        { name: 'CONTACT', link: '/contact' },
    ]




    return (

        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:flex items-center justify-between bg-white py-4 px-7 md:px-10'>
                <img src={assets.logo} alt="logo" className='w-36 cursor-pointer' />
                <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='text-2xl text-white cursor-pointer absolute right-8 top-6 md:hidden'>
                    {
                        mobileMenuOpen ? <IoMdClose className='text-black' /> : <RiMenu3Fill className='text-black' />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white
                md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in
                ${mobileMenuOpen ? 'top-16 opacity-100 bg-black' : 'top-[-490px]'} md:opacity-100`}>
                    {
                        Links.map((item) => (
                            <li key={item.name} className='md:ml-8 relative text-[12px] md:my-0 my-7'>
                                <Link to={item.link} className={`text-black hover:text-[#0042ec] duration-500 
                                tracking-widest font-medium  ${mobileMenuOpen ? 'text-white': 'text-black'}`}>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>

    )
}

export default Navbar