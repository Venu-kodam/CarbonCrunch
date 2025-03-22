import React from 'react'
import { featureData } from '../assets/assets'
import { motion } from "motion/react";

const Features = () => {

  return (
    <div >
      <motion.p
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className='text-[#239C0C] font-bold text-xl ms-10 my-4'>FEATURES</motion.p>
      <motion.h1
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className='text-4xl sm:text-6xl font-bold my-6'><span className='text-[#FEAB4F]'>Why</span> Carbon Crunch?</motion.h1>
      <div className='bg-[#F5F5F8] features grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg p-6 my-12'>
        {
          featureData.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              key={index} className='feature bg-white rounded-lg p-6'>
              <div className='w-12 h-12 flex items-center justify-center rounded-2xl bg-[#D6FFD0]'>
                <img src={feature.image} alt="feature-image" />
              </div>
              <h1 className='font-bold text-lg sm:text-2xl my-4 '>{feature.title}</h1>
              <p className='pb-8 text-base sm:text-lg'>{feature.text}</p>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Features