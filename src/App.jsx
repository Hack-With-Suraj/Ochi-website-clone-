import React from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/merqu'
import LocomotiveScroll from "locomotive-scroll";
import About from './components/About';
import Eyes from './components/Eyes';
import Feature from './components/Feture';
import Cards from './components/Cards';
import Ready from './components/Ready';
import Footer from './components/Footer';
function App() {
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <div className='w-full h-screen bg-black text-white'>
       <Navbar/>
       <LandingPage />
       <Marquee/>
       <About/>
       <Eyes/>
       <Feature/>
       <Cards/>
    <Ready/>
       <Footer/>
        </div>
    )
}

export default App
