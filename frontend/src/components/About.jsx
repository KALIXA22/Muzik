import React from 'react';
import music from '../assets/download.jfif';
import { FiMusic, FiHeadphones, FiHeart, FiZap, FiGlobe, FiShield } from 'react-icons/fi';

function About() {
  const features = [
    { icon: <FiMusic />, title: 'Lossless Audio', desc: 'Experience every detail with our high-fidelity streaming technology.' },
    { icon: <FiHeadphones />, title: 'Spatial Sound', desc: 'Immerse yourself in a 360-degree soundscape designed for depth.' },
    { icon: <FiHeart />, title: 'Smart Curation', desc: 'Personalized playlists that evolve with your musical taste.' },
    { icon: <FiZap />, title: 'Offline Mode', desc: 'Take your music anywhere without worrying about connection.' },
    { icon: <FiGlobe />, title: 'Global Charts', desc: 'Discover trending tracks from every corner of the world.' },
    { icon: <FiShield />, title: 'Ad-Free', desc: 'Uninterrupted listening experience for true music lovers.' },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative order-2 lg:order-1 animate-fade-up">
            <div className="absolute -inset-10 bg-violet-600/10 blur-[100px] rounded-full"></div>
            <div className="relative rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
              <img src={music} alt="About Musica" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/40 to-transparent mix-blend-overlay"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-10 p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl max-w-xs animate-float">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-white/60 text-sm font-medium">Years of excellence in digital audio streaming and artist discovery.</div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2 animate-fade-up">
            <div className="inline-block px-4 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold tracking-widest uppercase">
              The Genesis
            </div>
            <h2 className="text-5xl font-bold leading-tight text-white">
              Music Designed <br />
              <span className="gradient-text">for Human Emotion.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              We believe music is more than just background noise. It's a journey, a memory, and a feeling. Our platform is built by musicians and audiophiles to ensure every note resonates exactly as the artist intended.
            </p>
            <div className="pt-4">
              <button className="px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-white font-bold">
                Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-500 to-pink-500 flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;