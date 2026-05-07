import React from 'react';
import { FiPlay, FiArrowRight, FiMusic } from 'react-icons/fi';
import music from '../assets/download().jfif';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <div className="space-y-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
            <span className="text-xs font-medium tracking-wider uppercase text-white/70">The Future of Sound</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] text-white">
              Elevate Your <br />
              <span className="gradient-text">Auditory Soul.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-xl leading-relaxed">
              Experience music like never before. A seamless blend of high-fidelity sound and premium design, crafted for the true audiophile.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group relative px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Listening <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md font-bold text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-95">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <FiPlay className="ml-1" />
              </div>
              Explore Library
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5 text-white">
            <div>
              <div className="text-2xl font-bold">50M+</div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-semibold">Tracks</div>
            </div>
            <div>
              <div className="text-2xl font-bold">120K</div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-semibold">Artists</div>
            </div>
            <div>
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-semibold">Rating</div>
            </div>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative animate-scale-in delay-200">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-600/20 blur-[100px] rounded-full animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-600/20 blur-[100px] rounded-full animate-float delay-300"></div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-pink-500/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative aspect-square rounded-[40px] border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
              <img
                src={music}
                alt="Music Experience"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>

              {/* Floating Overlay Card */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center animate-pulse">
                    <FiMusic className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Currently Trending</div>
                    <div className="text-sm text-white/60">Midnight Melodies • 2.4M Listening</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;