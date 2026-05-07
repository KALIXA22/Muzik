import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMusic, FiMenu, FiX, FiUser } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 px-6 py-4 ${scrolled ? 'md:px-20' : 'md:px-12'}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-8 h-16 rounded-2xl border transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50' : 'bg-white/5 backdrop-blur-md border-white/5'} text-white`}>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
            <FiMusic className="text-xl text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">Musica</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest">About</a>
          <a href="#contact" className="text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest">Contact</a>

          <div className="h-6 w-px bg-white/10 mx-2"></div>

          {isAuthenticated ? (
            <div className="flex items-center gap-6">
              <Link to="/dashboard" className="text-sm font-bold text-violet-400 hover:text-violet-300 transition-colors uppercase tracking-widest">Dashboard</Link>
              <button
                onClick={logout}
                className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest">Login</Link>
              <Link to="/register" className="px-6 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold hover:scale-105 transition-transform shadow-xl">
                Get Started
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white/70 hover:text-white transition-colors" onClick={() => setOpen(!open)}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-24 left-6 right-6 p-8 rounded-3xl bg-[#0f172a] border border-white/10 shadow-2xl md:hidden animate-scale-in">
          <div className="flex flex-col gap-6 text-center">
            <a href="#about" onClick={() => setOpen(false)} className="text-lg font-bold text-white">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-lg font-bold text-white">Contact</a>
            <div className="h-px bg-white/5 w-full"></div>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" onClick={() => setOpen(false)} className="text-lg font-bold text-violet-400">Dashboard</Link>
                <button onClick={() => { logout(); setOpen(false); }} className="text-lg font-bold text-red-400">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className="text-lg font-bold text-white">Login</Link>
                <Link to="/register" onClick={() => setOpen(false)} className="py-4 rounded-2xl bg-white text-slate-900 font-bold">Get Started</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
