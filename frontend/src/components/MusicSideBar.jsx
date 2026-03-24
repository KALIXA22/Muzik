import { Home, Search, Library, Heart, ListMusic, Plus, Bell, Music2 } from "lucide-react";
import { useState } from "react";

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

  return (
    <aside className="w-64 h-full flex flex-col glass-panel rounded-none border-r border-t-0 border-b-0 border-l-0">
      
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
          <Music2 className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold gradient-text">SoundFlow</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
              activeItem === item.label
                ? "gradient-bg text-primary-foreground shadow-glow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}

        {/* Playlist Section */}
        <div className="pt-6 pb-2 px-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Your Playlists
          </span>
        </div>

        {playlists.map((pl) => (
          <button
            key={pl}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
          >
            <ListMusic className="w-4 h-4" />
            <span>{pl}</span>
          </button>
        ))}

        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-muted/50 transition-all font-medium">
          <Plus className="w-4 h-4" />
          <span>Create Playlist</span>
        </button>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center text-sm font-bold text-primary-foreground">
            A
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate text-foreground">
              Alex Rivera
            </p>
            <p className="text-xs text-muted-foreground">Premium</p>
          </div>

          <button
            onClick={onNotificationsClick}
            className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full gradient-bg" />
          </button>
        </div>
      </div>

    </aside>
  );
};

export default MusicSidebar;