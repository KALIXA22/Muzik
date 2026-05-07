import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Splash from '../components/Splash';



function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasShownSplash = sessionStorage.getItem('hasShownSplash');
    if (hasShownSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
    sessionStorage.setItem('hasShownSplash', 'true');
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0f172a]">
      {showSplash && <Splash onFinish={handleSplashFinish} />}
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/20 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-600/20 blur-[120px] rounded-full animate-float delay-300"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-cyan-600/10 blur-[100px] rounded-full animate-float delay-200"></div>
      </div>

      <Navbar />

    </div>
  )
}

export default Home;