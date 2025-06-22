import React from 'react';
import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram,
} from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import CardsImg from '../../assets/credit-cards.webp';
import Logo from '../../assets/logo.png';
import { motion } from 'Framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className='bg-red-950 pt-12 pb-8 text-white'>
        <div className="container md:ml-30">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <motion.div initial={{ opacity:0, y:100 }} whileInView={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.6, }}
                className='space-y-6'>
                    <img src={Logo} alt='' 
                    className='max-w-[100px] invert'/>
                    <div>
                        <p className='flex items-center gap-2'><FaPhone />+234-81*-***-*****</p>
                        <p className='flex items-center gap-2 mt-2'>{" "}<FaMapLocation />Ondo, Nigeria</p>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity:0, y:100 }} whileInView={{ opacity:1, y:0 }} transition={{ delay:0.4, duration:0.6, }}
                className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Quick Links</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity:0, y:100 }} whileInView={{ opacity:1, y:0 }} transition={{ delay:0.8, duration:0.6, }}
                className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Follow us</h1>
                    <div className='flex items-center gap-3'>
                        <FaFacebook className='text-3xl hover:scale-105 duration-300' />
                        <FaInstagram className='text-3xl hover:scale-105 duration-300' />
                        <FaTelegram className='text-3xl hover:scale-105 duration-300' />
                        <FaGoogle className='text-3xl hover:scale-105 duration-300' />
                    </div>
                    <div className='space-y-2'>
                        <p>Payment Methods</p>
                        <img src={CardsImg} alt='' />
                    </div>
                </motion.div>
            </div>
            <p className='text-center mt-8 border-t-2 border-white/40 pt-8'>
                Copyright &copy; 2025. All Rights Reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer