import React, { useEffect, useRef, useState } from 'react'
import assets from '../assets/assets'

const Navbar = () => {
    const sideMenuref = useRef()
    const [isscroll, setIsScroll] = useState(false)
    const openMenu = () => {
        sideMenuref.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuref.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            }
            else {
                setIsScroll(false)
            }
        })
    }, [])
    return (
        <>
            <div className='flex justify-between items-center '>
                <div className='flex gap-2 items-center'>
                    <img src={assets.logo} className='w-10' alt="logo" />
                    <h1 className='font-bold text-xl text-[#222222]'>Carboncrunch</h1>
                </div>
                <ul className='hidden sm:flex sm:flex-row gap-12 text-[#222222] font-semibold text-base'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Services</li>
                    <li className='cursor-pointer'>Blog</li>
                    <li className='cursor-pointer'>About Us</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
                <div className='hidden sm:flex sm:flex-row gap-4 font-bold'>
                    <button className='bg-[#D6FFD0] text-[#28B30E] cursor-pointer rounded-md px-12 py-2'>Login</button>
                    <button className='bg-[#28B30E]  rounded-md px-8 cursor-pointer py-2'>Book Demo</button>
                </div>
                <button onClick={openMenu} className='block md:hidden  ml-3'>
                    <img src={assets.menu_black} className='w-6 ' alt="" />
                </button>
            </div>
            {/* -------- mobile menu --------- */}
            <ul ref={sideMenuref} className={`flex flex-col md:hidden py-20 gap-4 lg:gap-8  bg-gray-400 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 transition duration-500`}>
                <div onClick={closeMenu} className='absolute right-6 top-6'>
                    <img src={assets.close_black} className='w-5 cursor-pointer' alt="" />
                </div>
                <li><a onClick={closeMenu} >Home</a></li>
                <li><a onClick={closeMenu} >Services</a></li>
                <li><a onClick={closeMenu} >Blog</a></li>
                <li><a onClick={closeMenu} >About Us</a></li>
                <li><a onClick={closeMenu} >Contact</a></li>
                <div className='flex flex-col gap-4 font-bold'>
                    <button className='bg-[#D6FFD0] text-[#28B30E] cursor-pointer rounded-md px-4 py-2'>Login</button>
                    <button className='bg-[#28B30E]  rounded-md px-4 cursor-pointer py-2'>Book Demo</button>
                </div>
            </ul>
        </>
    )
}

export default Navbar