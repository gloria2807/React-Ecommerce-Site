import React, { useRef, useState, View, Text, TouchableOpacity } from 'react';
import Logo from '../../assets/logo.png';
import { FaRegUser } from 'react-icons/fa';
import { AnimatePresence, motion } from 'Framer-motion';
import { UpdateFollower } from 'react-mouse-follower';
import { Link } from 'react-scroll';
import { MdMenu } from 'react-icons/md';

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: 'home',
  },
  {
    id: 2,
    title: "Products",
    path: 'products',
  },
  {
    id: 3,
    title: "About",
    path: 'about',
  },
  {
    id: 4,
    title: "Blog",
    path: 'blog',
  },
  {
    id: 5,
    title: "Contact",
    path: 'contact',
  },
];

const Navbar = () => {

  return(
  <div className='text-white py-6'>
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1, delay:0.5 }}
    className="container flex justify-between items-center md:ml-30">
      <div>
        <img src={Logo} alt='' className='max-w-[100px] invert'/>
      </div>
      <div className='hidden md:block'>
        <ul className='flex items-center gap-4 relative z-40'>
          {NavbarMenu.map((item) => (
            <li>
              <UpdateFollower mouseOptions={{
                backgroundColor: "white",
                zIndex: 10,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}>
              <Link to={item.path} className='inline-block text-base font-semibold py-2 px-3 uppercase'>{item.title}</Link>
              </UpdateFollower>
            </li>
          ))}

          <UpdateFollower mouseOptions={{
                backgroundColor: "white",
                zIndex: 10,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}>
          <button className='text-xl px-14'>
            <FaRegUser />
          </button>
          </UpdateFollower>
        </ul>
      </div>
      <div className='md:hidden'>
        <MdMenu className='text-4xl'/>
      </div>
    </motion.div>
  </div>
  );
};

export default Navbar;