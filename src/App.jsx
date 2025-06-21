import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { UpdateFollower } from 'react-mouse-follower';
import Products from './Components/Products/Products';
import Banner from './Components/Banner/Banner';
import Banner2 from './Components/Banner/Banner2';
import Blogs from './Components/Blogs/Blogs';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';


  const App = () => {
return <main className="overflow-x-hidden">
  <UpdateFollower mouseOptions={{
    backgroundColor: "white",
    zIndex: 10,
    followSpeed: 1.5,
  }}>
  <Hero />
  <Products />
  <Banner />
  { /*<Banner2 /> */}
  <Blogs />
  <FAQ />
  <Footer />
  </UpdateFollower>
  </main>;
  };

export default App;
