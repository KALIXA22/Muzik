import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Library from '../components/Library';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden
      bg-gradient-to-br from-[#fdfbfb] via-[#f3e7f3] to-[#e3d4f3]">
        
         <Navbar />

       <main className="pt-20"> 
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="library"><Library /></section>
       <section id="contact"><Contact /></section>
       </main>
       <Footer /> 
    </div>
  )
}

export default Home;