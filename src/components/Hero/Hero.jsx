import React from 'react'
import { motion } from "framer-motion";
import { FadeRight } from '../../utilities/animation';
import { MdOutlineShoppingBag } from "react-icons/md";
import HeroImg from "../../assets/img/flower-plate.png";
import Flowerfly from "../../assets/img/flower-fly.png"
const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Flower Shop Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h3 
            variants={FadeRight(0.3)}
            initial="hidden"
            animate="visible"
            className="text-3xl text-tertiary font-bold">
                New Arrivals
            </motion.h3>
            <motion.h1 
            variants={FadeRight(0.6)}
            initial="hidden"
            animate="visible"

            className="text-4xl lg:text-6xl font-playfair leading-relaxed xl:leading-loose whitespace-nowrap">
              For Valentine's Day!
            </motion.h1>
            <motion.p
            variants={FadeRight(0.9)}
            initial="hidden"
            animate="visible"
            >Exclusive Offer -10% Off This Week</motion.p>
            {/*button section */}
            <motion.div 
            variants={FadeRight(1.5)}
            initial="hidden"
            animate="visible"
            className='flex justify-center md:justify-start'>
                <button className='primary-btn flex items-center gap-2'>
                    <span>
                    <MdOutlineShoppingBag />
                    </span>
                    Shop Now</button>
            </motion.div>
          </div>
        </div>
        {/* Hero Images */}
        <div className='flex justify-center items-center'>
            <img 
            src={HeroImg} alt="Hero Image" className='w-[300px]
            md:w-[550px] drop-shadow'/>
        </div>
        {/* Flower Fly image */}
        <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80rotate-[40deg]'>
            <motion.img 
            initial = {{opacity: 0, y: -200, rotate: 75}}
            animate = {{opacity: 1, y:0, rotate: 0}}
            transition={{duration:1, delay:1.5}}
            src={Flowerfly} alt="Flower Animation"className='w-full md:max-w-[300px]' />
        </div>
      </div>
    </section>
  )
}

export default Hero;
