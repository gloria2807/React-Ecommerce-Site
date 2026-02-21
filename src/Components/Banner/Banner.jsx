import React from 'react';
import BannerImg from '../../assets/Banner/juice.png';
import SplashImg from '../../assets/Banner/splash.png';
import { motion } from 'Framer-motion';
import { fadeUp } from '../../Components/Products/Products';

const Banner = () => {
  return (
    <section id='about'>
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12 px-4">
            <div className="relative">
                <motion.img initial={{ opacity:0, x:-100 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:0.8, delay:0.2, ease: "easeInOut" }}
                src={BannerImg} alt='' className='w-[300px] md:w-[400px] mx-auto relative z-10' />
                <motion.img initial={{ opacity:0, y:-100, rotate: -180, scale:0 }} whileInView={{ opacity:1, y:0, rotate:0, scale:1 }} transition={{ duration:0.8, delay:0.2, ease: "easeInOut" }}
                src={SplashImg} alt='' className='absolute bottom-0 z-0' />
            </div>
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                    <motion.h1 variants={fadeUp(0.7)} initial="hidden" whileInView="show"
                    className='text-3xl lg:text-4xl font-semibold'>Refresh your world with Fanta
                    </motion.h1>
                <motion.p variants={fadeUp(0.9)} initial="hidden" whileInView="show"
                 className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime libero dolor, facilis expedita aliquam quae natus unde reiciendis eius fuga magnam, sit ut consequuntur maiores atque eaque possimus perferendis explicabo ducimus repellendus voluptatem sint amet. Adipisci ducimus ipsa molestias in dolores placeat voluptatem? Enim, explicabo? Nam repudiandae blanditiis incidunt aut.</motion.p>
                <motion.button variants={fadeUp(1.1)} initial="hidden" whileInView="show"
                className='!mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-200'>Shop Now</motion.button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Banner