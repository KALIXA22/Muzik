import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="
        flex items-center justify-between px-6 h-16 
        rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30
        shadow-[0_8px_32px_rgba(31,38,135,0.2)]
        text-[#3b2f63]">

        <Link to="/" className="text-xl font-bold tracking-wide">
          Music 🎧
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Home', 'About', 'Library', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="
              relative text-[#3b2f63]/80 hover:text-[#3b2f63] transition
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
              after:bg-[#d9a7c7] hover:after:w-full after:transition-all
            ">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="px-4 py-2 rounded-3xl border border-white/40 hover:bg-white/30 transition">
            Log In
          </Link>
          <Link to="/signup" className="px-5 py-2 rounded-3xl bg-gradient-to-r from-[#d9a7c7] to-[#3b2f63] text-white shadow-[0_0_20px_rgba(217,167,199,0.4)] hover:shadow-[0_0_30px_rgba(217,167,199,0.7)] transition">
            Sign Up
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FiX size={24}/> : <FiMenu size={24}/>}
        </button>
      </div>

      {open && (
        <div className="mt-4 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl p-6 space-y-6 text-[#3b2f63] md:hidden">
          {['Home', 'About', 'Library', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block">{item}</a>
          ))}
          <div className="pt-4 border-t border-white/30 space-y-3">
            <Link to="/login" className="block text-center rounded-3xl py-2 border border-white/40">Log In</Link>
            <Link to="/signup" className="block text-center rounded-3xl py-2 bg-gradient-to-r from-[#d9a7c7] to-[#3b2f63] text-white">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;