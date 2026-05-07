import React, { useState, useEffect, useRef } from 'react'
import MusicSidebar from '../components/MusicSideBar';
import SongCard from '../components/SongCard';
import { Play, Pause, SkipBack, SkipForward, Volume2, Music, Search, Bell, User, Loader2 } from 'lucide-react';
import { FiMusic } from 'react-icons/fi';
import { spotifyAPI } from '../api';
import { useAuth } from '../context/AuthContext';
import musicHero from '../assets/music.jpg';

function MusicDashboard() {
  const { user } = useAuth();
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  // Fetch initial trending tracks (Now using the iTunes fallback API in backend)
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        const data = await spotifyAPI.getNewReleases();
        setSongs(data);
        if (data.length > 0 && !currentSong) {
          setCurrentSong(data[0]);
          setCurrentIndex(0);
        }
      } catch (error) {
        console.error("Failed to fetch tracks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  // Sync Audio Element and handle play promises safely
  useEffect(() => {
    if (!audioRef.current || !currentSong) return;

    const audio = audioRef.current;

    if (isPlaying) {
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Ignore AbortError caused by rapid song switching
          if (error.name === 'AbortError') {
            // silent ignore
          } else {
            console.error("Playback failed:", error);
            setIsPlaying(false);
          }
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSong]);

  // Track Progress
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    if (duration) {
      setProgress((current / duration) * 100);
    }
  };

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      setIsSearching(true);
      try {
        const results = await spotifyAPI.search(query);
        setSongs(results);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setIsSearching(false);
      }
    } else if (query.length === 0) {
      const data = await spotifyAPI.getNewReleases();
      setSongs(data);
    }
  };

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
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for tracks, artists, or albums..."
                className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all text-sm"
              />
              {isSearching && (
                <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-violet-400 animate-spin" />
              )}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all relative">
              <Bell className="w-5 h-5 text-white/70" />
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50"></span>
            </button>
            <div className="flex items-center gap-4 pl-6 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-white">{user?.name || 'Musica User'}</div>
                <div className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">Premium User</div>
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
              src={musicHero}
              className="w-full h-80 object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              alt="Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/40"></div>
            <div className="absolute bottom-10 left-10 space-y-4 animate-fade-up">
              <div className="inline-block px-4 py-1 rounded-full bg-violet-500 text-[10px] font-bold uppercase tracking-widest">Featured Artist</div>
              <h2 className="text-6xl font-extrabold tracking-tighter uppercase italic leading-none">Sonic <br /><span className="gradient-text">Frontiers</span></h2>
              <div className="flex items-center gap-6 pt-4">
                <button className="px-8 py-3.5 rounded-2xl bg-white text-slate-900 font-bold hover:scale-105 transition-transform shadow-xl">Listen Now</button>
                <button className="px-8 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 font-bold text-white hover:bg-white/20 transition-all uppercase tracking-widest text-[10px]">Add to Library</button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold uppercase italic tracking-wider">{searchQuery ? `Results: ${searchQuery}` : "Trending Now"}</h3>
            {!searchQuery && <button className="text-[10px] font-bold text-white/30 hover:text-white uppercase tracking-widest transition-all">View All</button>}
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-10 h-10 text-violet-500 animate-spin" />
            </div>
          ) : (
            /* Songs Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
              {songs.length > 0 ? (
                songs.map((song) => (
                  <div key={song.id}>
                    <SongCard song={song} onPlay={handlePlay} />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 text-white/40">
                  <Music className="w-16 h-16 mx-auto mb-4 opacity-10" />
                  <p className="text-xl font-bold">No tracks found</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Floating Player Pod */}
        <div className="absolute bottom-8 left-10 right-10 z-20">
          <div className="p-4 rounded-[32px] bg-[#0f172a]/80 backdrop-blur-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-6 animate-fade-up">

            {/* Audio Element */}
            <audio
              ref={audioRef}
              src={currentSong?.preview_url}
              onEnded={handleNextSong}
              onTimeUpdate={handleTimeUpdate}
            />

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
                    <h3 className="text-base font-bold text-white truncate italic uppercase tracking-wider">{currentSong.title}</h3>
                    <p className="text-xs text-white/40 font-medium truncate">{currentSong.artist}</p>
                    {currentSong.preview_url && (
                      <span className="text-[7px] font-bold text-violet-400 uppercase tracking-widest bg-violet-400/10 px-1.5 py-0.5 rounded mt-1 inline-block">Digital Stream Active</span>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Music className="w-6 h-6 text-white/20" />
                  </div>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest italic">Signal Offline</p>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex-1 flex flex-col items-center gap-2 w-full">
              <div className="flex items-center gap-10">
                <button
                  onClick={handlePrevSong}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <SkipBack className="w-6 h-6" />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all hover:bg-violet-500 hover:text-white"
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7" fill="currentColor" />
                  ) : (
                    <Play className="w-7 h-7 ml-1" fill="currentColor" />
                  )}
                </button>

                <button
                  onClick={handleNextSong}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <SkipForward className="w-6 h-6" />
                </button>
              </div>

              {/* Progress Bar (Real-time) */}
              <div className="w-full flex items-center gap-4">
                <span className="text-[9px] font-black text-white/20 w-10 text-right tabular-nums">
                  {audioRef.current ? Math.floor(audioRef.current.currentTime) : 0}s
                </span>
                <div
                  className="flex-1 h-1 bg-white/5 rounded-full relative overflow-hidden group cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const pct = x / rect.width;
                    if (audioRef.current) {
                      audioRef.current.currentTime = pct * audioRef.current.duration;
                    }
                  }}
                >
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className="text-[9px] font-black text-white/20 w-10 tabular-nums">
                  {audioRef.current ? Math.floor(audioRef.current.duration || 0) : 0}s
                </span>
              </div>
            </div>

            {/* Volume & Actions */}
            <div className="hidden md:flex items-center justify-end gap-6 w-[30%]">
              <div className="flex items-center gap-3 group">
                <Volume2 className="w-5 h-5 text-white/40 group-hover:text-violet-400 transition-colors" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setVolume(val);
                    if (audioRef.current) audioRef.current.volume = val;
                  }}
                  className="w-24 h-1 bg-white/5 rounded-full appearance-none cursor-pointer accent-violet-500"
                />
              </div>
              <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 group">
                <FiMusic className="text-white/30 group-hover:text-white transition-colors" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicDashboard;