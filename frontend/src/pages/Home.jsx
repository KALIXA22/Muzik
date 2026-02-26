import React from 'react'

function Home() {
  return (
      <div className="relative min-h-screen overflow-x-hidden
      bg-gradient-to-br from-[#fdfbfb] via-[#f3e7f3] to-[#e3d4f3]">

      <Navbar />

      <main className="pt-28 ">
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