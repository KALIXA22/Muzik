import React from "react";
import { FiPlay } from "react-icons/fi";
import music from "../assets/music.avif";

const SONGS = [
  { title: "Midnight Vibes", artist: "Luna Waves" },
  { title: "Golden Hour", artist: "Sky Echo" },
  { title: "Chill Frequency", artist: "Nova Beats" },
  { title: "Deep Emotions", artist: "Aria Soul" },
  { title: "City Lights", artist: "Urban Drift" },
  { title: "Soft Pulse", artist: "Velvet Tone" },
];

function Library() {
  return (
    <section id="library" className="relative isolate py-32">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-5 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/30 text-sm">
            Music Library
          </div>

          <h2 className="text-4xl font-bold text-[#3b2f63]">Explore Your Sound 🎶</h2>
          <p className="text-[#3b2f63]/80 max-w-2xl mx-auto">
            Dive into curated playlists and trending tracks designed to match every mood and moment.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          {["All", "Pop", "Chill", "Afro", "R&B"].map((cat) => (
            <button
              key={cat}
              className="px-6 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/30 text-[#3b2f63] hover:bg-gradient-to-r hover:from-[#d9a7c7] hover:to-[#3b2f63] hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Songs Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {SONGS.map((song, index) => (
            <div key={index} className="group relative bg-white/30 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition">
              
              <div className="relative">
                <img src={music} alt={song.title} className="w-full h-56 object-cover" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <button className="p-4 rounded-full bg-gradient-to-r from-[#d9a7c7] to-[#3b2f63] text-white shadow-[0_0_20px_rgba(217,167,199,0.8)] hover:scale-110 transition">
                    <FiPlay size={20} />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-[#3b2f63]">{song.title}</h3>
                <p className="text-sm text-[#3b2f63]/70">{song.artist}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Library;