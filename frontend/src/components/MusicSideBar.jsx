import { Home, Search, Library, Heart, ListMusic, Plus, Bell, Music2, LogOut, Settings } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const menuItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Search, label: "Browse" },
  { icon: Library, label: "Your Library" },
  { icon: Heart, label: "Favorites" },
  { icon: ListMusic, label: "Playlists" },
];

const playlists = ["Chill Vibes", "Late Night Coding", "Workout Mix"];

const MusicSidebar = ({ onNotificationsClick }) => {
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="w-full h-full flex flex-col bg-[#0f172a] border-r border-white/5 font-['Outfit']">
      
      {/* Logo */}
      <div className="p-8 mb-4">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
            <Music2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">Musica</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 space-y-2">
        <div className="pb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 px-4">Menu</span>
        </div>
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 text-sm font-bold ${
              activeItem === item.label
                ? "bg-white text-slate-900 shadow-xl shadow-white/5"
                : "text-white/40 hover:text-white hover:bg-white/5"
            }`}
          >
            <item.icon className={`w-5 h-5 ${activeItem === item.label ? "text-violet-500" : ""}`} />
            <span>{item.label}</span>
          </button>
        ))}

        {/* Playlist Section */}
        <div className="pt-10 pb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 px-4">
            Library
          </span>
        </div>

        {playlists.map((pl) => (
          <button
            key={pl}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-bold text-white/40 hover:text-white hover:bg-white/5 transition-all"
          >
            <div className="w-2 h-2 rounded-full bg-violet-500/40"></div>
            <span>{pl}</span>
          </button>
        ))}

        <button className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-bold text-violet-400 hover:bg-violet-500/10 transition-all">
          <div className="w-8 h-8 rounded-xl bg-violet-500/10 flex items-center justify-center">
            <Plus className="w-4 h-4" />
          </div>
          <span>Create Playlist</span>
        </button>
      </nav>

      {/* Footer Actions */}
      <div className="p-6 space-y-2">
        <button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold text-white/40 hover:text-white hover:bg-white/5 transition-all">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold text-red-400 hover:bg-red-400/10 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>

    </aside>
  );
};

export default MusicSidebar;