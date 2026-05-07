import React, { useEffect, useState } from 'react';
import { FiMusic, FiZap, FiArrowRight, FiUserPlus, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import musicBg from '../assets/music.jpg';

function Splash() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#060a16] overflow-hidden font-['Outfit']">
      
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={musicBg}
          alt="Music Vibe"
          className="w-full h-full object-cover opacity-30 scale-110 animate-float"
          style={{ filter: 'blur(8px) saturate(1.5)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a16]/95 via-[#060a16]/70 to-[#060a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]"></div>
      </div>
      
      {/* Cyberpunk Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-violet-600/20 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-pink-600/20 blur-[150px] rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-20 w-full max-w-xl px-6 text-center">
        
        {/* Futuristic Logo Container */}
        <div className="mb-14 animate-scale-in">
          <div className="relative inline-block p-1 rounded-[44px] bg-gradient-to-tr from-violet-500 via-pink-500 to-cyan-400">
            <div className="w-28 h-28 rounded-[40px] bg-[#060a16] flex items-center justify-center relative z-10">
              <FiMusic className="text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-violet-500 to-pink-500 animate-pulse" />
            </div>
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-pink-500 blur-2xl opacity-40 animate-pulse"></div>
          </div>
        </div>

        {/* Brand Content */}
        <div className={`space-y-8 transition-all duration-1000 transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="space-y-3">
            <h1 className="text-8xl md:text-9xl font-black text-white tracking-[15px] uppercase italic leading-none ml-4">
              Musica<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">.</span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-white/40 text-[11px] font-black tracking-[1em] uppercase">
              <div className="h-px w-8 bg-white/10"></div>
              <span>Premium</span>
              <FiZap className="text-violet-500 animate-pulse" />
              <span>Experience</span>
              <div className="h-px w-8 bg-white/10"></div>
            </div>
          </div>

          <p className="text-white/50 text-xl font-medium max-w-sm mx-auto leading-relaxed italic">
            "Your rhythm, redefined by <span className="text-white">innovation</span>."
          </p>

          <div className="flex flex-col gap-8 pt-12 max-w-sm mx-auto">
            
            {/* Neon Backlit Login Button */}
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-[24px] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
               <Link 
                to="/login" 
                className="relative flex items-center justify-center gap-4 w-full py-6 rounded-[22px] bg-black border border-white/10 text-white font-black transition-all hover:border-white/20 active:scale-95 shadow-2xl"
               >
                <div className="absolute inset-0 overflow-hidden rounded-[22px]">
                   <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <FiLogIn className="text-2xl text-violet-500 group-hover:scale-110 transition-transform" />
                <span className="text-xl tracking-[4px] uppercase italic">Enter Sound</span>
                <FiArrowRight className="text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
               </Link>
            </div>

            {/* Futuristic Glass Signup Button */}
            <Link 
              to="/register" 
              className="group relative flex items-center justify-center gap-4 w-full py-6 rounded-[22px] bg-white/5 border border-white/10 backdrop-blur-3xl text-white font-black transition-all hover:bg-white/10 hover:border-violet-500/50 active:scale-95 shadow-inner"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-[22px]"></div>
              <FiUserPlus className="text-2xl text-pink-500" />
              <span className="text-xl tracking-[4px] uppercase italic">Join Beats</span>
              
              {/* Soundwave bars inside button */}
              <div className="flex items-center gap-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 {[1,2,3].map(i => (
                    <div key={i} className={`w-0.5 bg-pink-500 rounded-full animate-bounce h-${i*2}`} style={{ animationDelay: `${i*0.2}s` }}></div>
                 ))}
              </div>
            </Link>
          </div>

          {/* Minimal Navigation */}
          <div className="pt-16">
            <button className="text-white/20 hover:text-cyan-400 transition-all text-[10px] font-black uppercase tracking-[1em] flex items-center justify-center gap-6 mx-auto group">
              <span className="h-px w-12 bg-white/5 group-hover:bg-cyan-500/50 transition-all"></span>
              Explore
              <span className="h-px w-12 bg-white/5 group-hover:bg-cyan-500/50 transition-all"></span>
            </button>
          </div>
        </div>

        {/* Audio Spectrum Footer */}
        <div className="absolute bottom-[-100px] left-[-10%] right-[-10%] flex items-end justify-center gap-1.5 h-40 opacity-20 pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 bg-gradient-to-t from-violet-500 via-pink-500 to-cyan-400 rounded-full animate-float"
              style={{
                height: `${Math.random() * 80 + 20}%`,
                animationDelay: `${i * 50}ms`,
                animationDuration: `${Math.random() * 1 + 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Splash;
