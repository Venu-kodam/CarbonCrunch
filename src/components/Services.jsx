import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react";

const Services = () => {
  return (
    <div className='w-full flex flex-col-reverse gap-8 sm:flex-row items-center'>
        <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}  
        className='w-full sm:w-[50%]'>
          <img src={assets.computer_img} className='w-full scale-150' alt="computer-image" />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }} 
        className='w-full md:w-[50%]'>
          <h1 className='uppercase text-xl text-[#239C0C] font-bold'>Our Services</h1>
          <p className='text-4xl sm:text-6xl font-bold text-[#2D2D2D] my-8'>What do <span className='text-[#FEAB4F]'>we do</span>?</p>
          <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }} 
          className='rounded-3xl bg-[#F5F5F8] py-8 px-6 text-[#2D2D2D]'>
            <h1 className='text-3xl sm:text-5xl font-bold'>GHG Accounting</h1>
            <p className='text-base sm:text-lg my-6'>We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.</p>
            <button className='bg-[#D6FFD0] text-[#28B30E] font-bold px-6 py-2 rounded-lg'>See More Details</button>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}  
          className='rounded-3xl bg-[#F5F5F8] relative py-8 px-6 text-[#2D2D2D] my-4'>
            <h1 className='text-3xl sm:text-5xl font-bold'>GHG Accounting</h1>
            <p className='text-base sm:text-lg my-6'>We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.</p>
            <button className='bg-[#D6FFD0] text-[#28B30E] font-bold px-6 py-2 rounded-lg'>See More Details</button>
            <img src={assets.arrow} className='absolute left-[50%] mb-4' alt="" />
          </motion.div>
        </motion.div>
        
    </div>
  )
}

export default Services