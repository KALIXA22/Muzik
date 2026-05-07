import React, { useState } from 'react'
import MusicSidebar from "../components/MusicSideBar";
import SongCard from "../components/SongCard";
import { Play, Pause, SkipBack, SkipForward, Volume2, Music, Search, Bell, User } from 'lucide-react';
import { FiMusic } from 'react-icons/fi';

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
    <div className="flex h-screen bg-[#0f172a] text-white overflow-hidden font-['Outfit']">
      {/* Sidebar */}
      <div className="w-72 hidden lg:block">
        <MusicSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
        
        {/* Header */}
        <header className="flex-shrink-0 px-10 py-8 flex items-center justify-between z-10">
          <div className="flex items-center gap-6 flex-1 max-w-xl">
             <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-violet-400 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search for tracks, artists, or albums..." 
                  className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all text-sm"
                />
             </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all relative">
              <Bell className="w-5 h-5 text-white/70" />
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50"></span>
            </button>
            <div className="flex items-center gap-4 pl-6 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-white">Alex Rivera</div>
                <div className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">Premium Plan</div>
              </div>
              <button className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-500 to-pink-500 flex items-center justify-center border border-white/20 shadow-xl shadow-violet-500/20">
                <User className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </header>

        {/* Dynamic Background Elements */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-pink-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-10 pb-40">
          {/* Featured Hero Card */}
          <div className="mb-12 relative group rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop" 
               className="w-full h-80 object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
               alt="Hero"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/40"></div>
             <div className="absolute bottom-10 left-10 space-y-4 animate-fade-up">
                <div className="inline-block px-4 py-1 rounded-full bg-violet-500 text-[10px] font-bold uppercase tracking-widest">Featured Artist</div>
                <h2 className="text-6xl font-extrabold tracking-tighter">Urban Nights <br/><span className="gradient-text">City Lights</span></h2>
                <div className="flex items-center gap-6 pt-4">
                  <button className="px-8 py-3.5 rounded-2xl bg-white text-slate-900 font-bold hover:scale-105 transition-transform shadow-xl">Listen Now</button>
                  <button className="px-8 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 font-bold text-white hover:bg-white/20 transition-all">Add to Library</button>
                </div>
             </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Recommended for You</h3>
            <button className="text-sm font-bold text-violet-400 hover:text-violet-300 transition-colors">See all</button>
          </div>

          {/* Songs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {songs.map((song) => (
              <div key={song.id}>
                <SongCard song={song} onPlay={handlePlay} />
              </div>
            ))}
          </div>
        </div>

        {/* Floating Player Pod */}
        <div className="absolute bottom-8 left-10 right-10 z-20">
          <div className="p-4 rounded-[32px] bg-[#0f172a]/80 backdrop-blur-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-6 animate-fade-up">
            
            {/* Song Info */}
            <div className="flex items-center gap-4 w-full md:w-[30%]">
              {currentSong ? (
                <>
                  <div className="relative group">
                    <img
                      src={currentSong.cover}
                      alt={currentSong.title}
                      className={`w-16 h-16 rounded-2xl shadow-xl object-cover ${isPlaying ? 'animate-pulse' : ''}`}
                    />
                    <div className="absolute inset-0 bg-violet-500/20 mix-blend-overlay rounded-2xl"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white truncate">{currentSong.title}</h3>
                    <p className="text-xs text-white/40 font-medium truncate">{currentSong.artist}</p>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Music className="w-6 h-6 text-white/20" />
                  </div>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Select a Track</p>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex-1 flex flex-col items-center gap-2 w-full">
              <div className="flex items-center gap-8">
                <button
                  onClick={handlePrevSong}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <SkipBack className="w-6 h-6" />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all hover:bg-violet-500 hover:text-white"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" fill="currentColor" />
                  ) : (
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  )}
                </button>

                <button
                  onClick={handleNextSong}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <SkipForward className="w-6 h-6" />
                </button>
              </div>
              
              {/* Progress Bar (Demo) */}
              <div className="w-full flex items-center gap-3">
                <span className="text-[10px] font-bold text-white/30 w-10 text-right">1:24</span>
                <div className="flex-1 h-1.5 bg-white/5 rounded-full relative overflow-hidden group cursor-pointer">
                  <div className="absolute top-0 left-0 h-full w-[40%] bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"></div>
                </div>
                <span className="text-[10px] font-bold text-white/30 w-10">{currentSong?.duration || "0:00"}</span>
              </div>
            </div>

            {/* Volume & Actions */}
            <div className="hidden md:flex items-center justify-end gap-6 w-[30%]">
              <div className="flex items-center gap-3 group">
                <Volume2 className="w-5 h-5 text-white/40 group-hover:text-violet-400 transition-colors" />
                <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden group-hover:bg-white/10 transition-all">
                  <div 
                    className="h-full bg-white group-hover:bg-violet-400 transition-all" 
                    style={{ width: `${volume}%` }}
                  ></div>
                </div>
              </div>
              <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                <FiMusic className="text-white/70" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicDashboard