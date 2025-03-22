import React from 'react'
import assets from '../assets/assets'
import Navbar from './Navbar'
import { motion } from "motion/react";

const Header = () => {
    return (
        <div className='flex flex-col gap-6'>
            <motion.div className='' 
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
               <Navbar /> 
            </motion.div>
            <div className="flex flex-col sm:flex-row">
                <div className='w-full sm:w-1/2'>
                    <motion.div 
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className='inline-flex gap-1 items-center bg-black rounded-full text-[#AFB0B6] py-2 px-4'>
                        <div>👋</div>
                        <p>Let's save our Environment</p>
                    </motion.div>
                    <motion.h1 
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className='text-3xl sm:text-7xl font-bold my-2'>Optimize your eco reporting with</motion.h1>
                    <motion.h1 
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className='text-3xl sm:text-7xl rounded-full inline-block px-4 sm:px-6 py-4 bg-[#FEAB4F] text-white font-bold mt-4'>CARBON CRUNCH</motion.h1>
                    <motion.p 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className='text-lg sm:text-2xl font-semibold my-4 text-[#2D2D2D]'><span className='text-[#28B30E] font-bold'>95% </span>Accurate Carbon Calculations Trusted by Industry Leaders</motion.p>
                    <motion.div 
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className='flex  items-center font-bold  gap-8 my-6 ms-6'>
                        <p className='text-[#28B30E] font-semibold text-lg sm:text-2xl'>Free Calculator</p>
                        <button className='bg-[#28B30E] text-lg sm:text-xl rounded-md px-8 py-2 sm:py-4'>Book Demo</button>
                    </motion.div>
                </div>
                <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }} 
                className='w-full sm:w-1/2'> 
                    <img src={assets.earth_img} alt="earth-img" className='rounded-xl h-full brightness-100 contrast-120 sepia-[0.1] huer hue-rotate-0 shadow-lg' />
                </motion.div>
            </div>
        </div>
    )
}

export default Header