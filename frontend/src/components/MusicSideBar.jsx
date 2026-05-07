import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiSearch,
  FiCompass,
  FiHeart,
  FiPlusSquare,
  FiMusic,
  FiMic,
  FiSettings,
  FiLogOut
} from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

function MusicSidebar() {
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { icon: FiHome, label: 'Home', path: '/dashboard' },
    { icon: FiSearch, label: 'Search', path: '#' },
    { icon: FiCompass, label: 'Discover', path: '#' },
  ];

  const libraryItems = [
    { icon: FiMusic, label: 'My Tracks', path: '#' },
    { icon: FiMic, label: 'Artists', path: '#' },
    { icon: FiHeart, label: 'Favorites', path: '#' },
    { icon: FiPlusSquare, label: 'Create Playlist', path: '#' },
  ];

  const NavItem = ({ icon: Icon, label, path, active }) => (
    <Link
      to={path}
      className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${active
          ? 'bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-violet-400 border border-white/10'
          : 'text-white/40 hover:text-white hover:bg-white/5'
        }`}
    >
      <Icon className={`text-xl transition-transform group-hover:scale-110 ${active ? 'text-violet-400' : ''}`} />
      <span className="text-sm font-bold tracking-wide">{label}</span>
      {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50"></div>}
    </Link>
  );

  return (
    <div className="h-full flex flex-col bg-[#0f172a] border-r border-white/5 p-6 overflow-y-auto">

      {/* Brand */}
      <div className="flex items-center gap-3 px-4 mb-12">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
          <FiMusic className="text-xl text-white" />
        </div>
        <span className="text-2xl font-black tracking-tighter uppercase italic text-white">Musica</span>
      </div>

      {/* Main Menu */}
      <div className="space-y-2 mb-10">
        <div className="px-6 mb-4">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Menu</p>
        </div>
        {menuItems.map((item) => (
          <NavItem
            key={item.label}
            {...item}
            active={location.pathname === item.path}
          />
        ))}
      </div>

      {/* Your Library */}
      <div className="space-y-2 flex-1">
        <div className="px-6 mb-4">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Your Library</p>
        </div>
        {libraryItems.map((item) => (
          <NavItem
            key={item.label}
            {...item}
            active={false}
          />
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="pt-6 border-t border-white/5 space-y-2">
        <NavItem icon={FiSettings} label="Settings" path="#" />
        <button
          onClick={logout}
          className="flex items-center gap-4 px-6 py-4 rounded-2xl w-full text-red-400/60 hover:text-red-400 hover:bg-red-400/5 transition-all group"
        >
          <FiLogOut className="text-xl transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-bold tracking-wide">Logout</span>
        </button>
      </div>

    </div>
  );
}

export default MusicSidebar;
