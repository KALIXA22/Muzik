import React from 'react';
import { FiPlay, FiArrowRight } from 'react-icons/fi';
import music from '../assets/music.avif';

function Hero() {
  return (
    <section id="home" className="relative isolate pt-20 pb-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-8">
          <div className="inline-block px-5 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/30 text-sm">
            Immersive Sound Experience
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-[#3b2f63]">
              Feel every Beat.<br/> Live Every Moment.
            </h1>
            <p className="text-lg text-[#3b2f63]/80 max-w-xl">
              Discover new artists, create playlists, and experience music
              in a beautifully designed digital space.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-3xl bg-gradient-to-r from-[#d9a7c7] to-[#3b2f63] text-white font-semibold shadow-[0_0_20px_rgba(217,167,199,0.6)] hover:shadow-[0_0_40px_rgba(217,167,199,0.9)] transition">
              Start Listening <FiArrowRight className="inline ml-2"/>
            </button>
            <button className="px-6 py-3 rounded-3xl bg-white/30 backdrop-blur-md border border-white/30 text-[#3b2f63] hover:bg-white/40 transition">
              <FiPlay className="inline mr-2"/> Explore Library
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-[#d9a7c7]/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white/30 backdrop-blur-xl border border-white/30 rounded-[32px] overflow-hidden shadow-2xl p-8">
            <img src={music} alt="Music" className="w-full h-64 object-cover rounded-3xl"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;