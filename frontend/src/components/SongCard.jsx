import React from 'react';
import { FiPlay, FiHeart, FiMoreHorizontal } from 'react-icons/fi';

const SongCard = ({ song, onPlay }) => {
    const formatDuration = (seconds) => {
        if (!seconds) return "0:00";
        if (typeof seconds === 'string') return seconds;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div
            className="p-4 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer animate-scale-in"
            onClick={() => onPlay(song)}
        >
            <div className="relative rounded-2xl overflow-hidden mb-4 border border-white/5 shadow-2xl">
                <img
                    src={song.cover}
                    alt={song.title}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0f172a]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-14 h-14 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-violet-500 hover:text-white">
                        <FiPlay className='text-2xl ml-1' />
                    </div>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-pink-500">
                    <FiHeart size={14} />
                </button>
            </div>

            <div className="space-y-1 px-1">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold truncate text-white group-hover:text-violet-400 transition-colors">{song.title}</h3>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md">
                        {formatDuration(song.duration)}
                    </span>
                </div>
                <p className="text-sm text-white/50 font-medium truncate">{song.artist}</p>
                <div className="pt-3 flex items-center justify-between text-[11px] text-white/30 font-bold uppercase tracking-tighter">
                    <div className="flex items-center gap-2">
                        <span className="truncate max-w-[100px]">{song.album}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <span>HD</span>
                    </div>
                    <FiMoreHorizontal className="text-lg hover:text-white transition-colors" />
                </div>
            </div>
        </div>
    );
};

export default SongCard;
