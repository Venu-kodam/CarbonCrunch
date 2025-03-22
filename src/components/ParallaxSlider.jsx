import React, { useState, useEffect } from "react";
import { AnimatePresence,motion } from "motion/react";
import Navbar from "./Navbar";
import Header from "./Header";
import Stats from "./Stats";
import Features from "./Features";
import Services from "./Services";

const components = [<Header />, <Stats />, <Features />, <Services />];

const ParallaxSlider = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % components.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? components.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000); // Auto-slide every 4 sec
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full min-h-screen">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute w-full flex items-center justify-center"
                >
                    {components[index]}
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-1 cursor-pointer top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#8249;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-1 cursor-pointer top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#8250;
            </button>
        </div>
    );
};

export default ParallaxSlider;
