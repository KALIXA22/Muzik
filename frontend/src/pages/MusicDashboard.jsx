import React, { useState } from 'react'
import MusicSidebar from "../components/MusicSideBar";
import SongCard from "../components/SongCard";
import { Play, Pause, SkipBack, SkipForward, Volume2, Music, FiMusic } from 'lucide-react';
import Logo from '../assets/music.avif';

// Sample songs for demo
const DEMO_SONGS = [
  { id: 1, title: "Midnight Vibes", artist: "Luna Waves", album: "Night Dreams", duration: "3:45", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop" },
  { id: 2, title: "Golden Hour", artist: "Sky Echo", album: "Sunset Collection", duration: "4:12", cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop" },
  { id: 3, title: "Chill Frequency", artist: "Nova Beats", album: "Relaxation", duration: "3:28", cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop" },
  { id: 4, title: "Deep Emotions", artist: "Aria Soul", album: "Feelings", duration: "4:33", cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop" },
  { id: 5, title: "City Lights", artist: "Urban Drift", album: "Metropolitan", duration: "3:56", cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
  { id: 6, title: "Soft Pulse", artist: "Velvet Tone", album: "Ambient", duration: "4:01", cover: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop" },
];

function MusicDashboard() {
  const [songs] = useState(DEMO_SONGS);
  const [currentSong, setCurrentSong] = useState(DEMO_SONGS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePlay = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setCurrentIndex(songs.findIndex(s => s.id === song.id));
  };

  const handleNextSong = () => {
    if (songs.length === 0) return;
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    setCurrentSong(songs[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrevSong = () => {
    if (songs.length === 0) return;
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
    setCurrentSong(songs[prevIndex]);
    setIsPlaying(true);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#fdfbfb] via-[#f3e7f3] to-[#e3d4f3] overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 overflow-y-auto">
        <MusicSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex-shrink-0 px-8 py-6 border-b border-white/20 backdrop-blur-md bg-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-glow">
                <FiMusic className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">SoundFlow</h1>
                <p className="text-[#3b2f63]/70 mt-1">Your personal music experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/30">
              <Music className="w-5 h-5 text-[#3b2f63]" />
              <span className="text-[#3b2f63] font-medium">{songs.length} Tracks</span>
            </div>
          </div>
        </div>

        {/* Songs Grid & Player */}
        <div className="flex-1 overflow-auto flex flex-col">
          <div className="flex-1 px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {songs.map((song) => (
                <div key={song.id} onClick={() => handlePlay(song)}>
                  <SongCard song={song} onPlay={handlePlay} />
                </div>
              ))}
            </div>
          </div>

          {/* Player Bar */}
          <div className="flex-shrink-0 bg-white/20 backdrop-blur-xl border-t border-white/30 px-8 py-6">
            <div className="max-w-7xl mx-auto space-y-4">
              {/* Song Info */}
              <div className="flex items-center gap-6">
                {currentSong ? (
                  <>
                    <img
                      src={currentSong.cover}
                      alt={currentSong.title}
                      className="w-16 h-16 rounded-2xl shadow-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-[#3b2f63] truncate">{currentSong.title}</h3>
                      <p className="text-sm text-[#3b2f63]/70 truncate">{currentSong.artist}</p>
                    </div>
                  </>
                ) : (
                  <div className="flex-1">
                    <p className="text-[#3b2f63] font-semibold">No song selected</p>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={handlePrevSong}
                  className="p-3 rounded-2xl bg-white/30 hover:bg-white/40 text-[#3b2f63] transition-all duration-200 hover:scale-105"
                  title="Previous"
                >
                  <SkipBack className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-4 rounded-3xl bg-gradient-to-r from-[#d9a7c7] to-[#3b2f63] text-white shadow-[0_0_20px_rgba(217,167,199,0.6)] hover:shadow-[0_0_40px_rgba(217,167,199,0.9)] transition-all duration-200 hover:scale-105"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" fill="currentColor" />
                  ) : (
                    <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                  )}
                </button>

                <button
                  onClick={handleNextSong}
                  className="p-3 rounded-2xl bg-white/30 hover:bg-white/40 text-[#3b2f63] transition-all duration-200 hover:scale-105"
                  title="Next"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <Volume2 className="w-5 h-5 text-[#3b2f63]" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-32 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#d9a7c7] hover:accent-[#3b2f63] transition-all"
                />
                <span className="text-sm text-[#3b2f63] w-8 text-right">{volume}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicDashboard