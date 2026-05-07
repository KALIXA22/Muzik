import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiMusic } from 'react-icons/fi';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`
          flex items-center justify-between px-8 h-16 
          rounded-2xl border transition-all duration-300
          ${scrolled
            ? 'bg-[#0f172a]/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50'
            : 'bg-white/5 backdrop-blur-md border-white/5'
          }
          text-white`}>

          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/20">
              <FiMusic className="text-xl" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 group-hover:to-violet-400 transition-all">
              Musica
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {['Home', 'About', 'Library', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="
                relative text-sm font-medium text-white/70 hover:text-white transition-colors
                group
              ">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-pink-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Log In
            </Link>
            <Link to="/register" className="
              px-6 py-2.5 rounded-xl text-sm font-semibold
              bg-white text-slate-900 shadow-xl shadow-white/10
              hover:bg-violet-500 hover:text-white hover:shadow-violet-500/30
              transition-all active:scale-95
            ">
              Get Started
            </Link>
          </div>

          <button className="md:hidden text-white/70 hover:text-white transition-colors" onClick={() => setOpen(!open)}>
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          absolute top-full left-6 right-6 mt-4 p-6
          rounded-2xl bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10
          shadow-2xl md:hidden transition-all duration-300 transform
          ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}>
          <nav className="flex flex-col gap-6">
            {['Home', 'About', 'Library', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="text-lg font-medium text-white/70 hover:text-white transition-colors">{item}</a>
            ))}
            <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
              <Link to="/login" className="text-center py-3 text-white/70 font-medium">Log In</Link>
              <Link to="/register" className="text-center py-3 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold shadow-lg shadow-violet-600/20">Sign Up</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
