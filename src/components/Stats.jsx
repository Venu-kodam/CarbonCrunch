import React from 'react'
import { motion } from "motion/react";
const Stats = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-20 gap-10'>
                <motion.div 
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className='bg-[#3A3A3A] px-3 py-3 rounded-xl'>
                    <p className='text-5xl font-bold mb-3 text-white'>98%</p>
                    <p className='text-[#E2E2E2]'>Of CEOs Agree Sustainability Is Their Responsibility</p>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className='bg-[#28B30E] px-3 py-3 rounded-xl'>
                    <p className='text-5xl font-bold mb-3 text-[#222222]'>3X</p>
                    <p className='text-[#2D2D2D]'>ESG High Performers Deliver A Higher Total Shareholder Return</p>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className='bg-[#F6F6F6] px-3 py-3 rounded-xl'>
                    <p className='text-5xl font-bold mb-3 text-[#28B30E]'>37%</p>
                    <p className='text-[#239C0C]'>Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track</p>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }} 
                className='bg-[#3A3A3A] px-3 py-3 rounded-xl text-right'>
                    <p className='text-5xl font-bold mb-3 text-white'>18%</p>
                    <p className='text-[#E2E2E2]'>Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Stats