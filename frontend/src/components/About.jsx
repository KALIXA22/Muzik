import React from 'react';
import music from '../assets/music.avif';
import { FiMusic, FiHeadphones, FiHeart } from 'react-icons/fi';

function About() {
  return (
    <section id="about" className="relative isolate py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#3b2f63]/20 blur-2xl rounded-full"></div>
            <div className="relative bg-white/30 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-xl p-4">
              <img src={music} alt="About Music" className="w-full h-56 object-cover rounded-2xl" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/30 text-xs">
              About Us
            </div>
            <h2 className="text-3xl font-bold text-[#3b2f63]">Music Designed for Emotion</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              We blend technology and artistry to create a music experience that’s more than just sound — it’s a feeling.
            </p>
            <button className="px-5 py-2.5 rounded-3xl bg-gradient-to-r from-[#d9a7c7] to-[#3b2f63] text-white font-medium text-sm shadow-[0_0_15px_rgba(217,167,199,0.6)] hover:shadow-[0_0_25px_rgba(217,167,199,0.9)] transition">
              Discover More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[{ icon: <FiMusic size={22} />, title: 'Discover' }, { icon: <FiHeadphones size={22} />, title: 'Listen' }, { icon: <FiHeart size={22} />, title: 'Love' }].map((item,index)=>(
            <div key={index} className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <div className="text-[#3b2f63]">{item.icon}</div>
              <h3 className="text-md font-semibold text-[#3b2f63]">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;