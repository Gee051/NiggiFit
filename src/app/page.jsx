import React from 'react'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';


export default function Home() {
  return (
    <div>
      <Navbar />
      
     <Banner />

      <About />

   <Services />

   <Pricing />
 <Contact />
    </div>
  );
}
