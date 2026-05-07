import React from 'react'
import { Play, Clock, Heart } from "lucide-react"

const SongCard = ({ song, onPlay, variant = "grid" }) => {
    if (variant === "row") {
        return (
            <div
                className='min-w-[160px] group cursor-pointer'
                onClick={() => onPlay(song)}
            >
                <div className='relative rounded-2xl overflow-hidden mb-3 border border-white/5 shadow-xl'>
                    <img
                        src={song.cover}
                        alt={song.title}
                        className='w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className="absolute inset-0 bg-[#0f172a]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <Play className='w-6 h-6 text-white ml-0.5' fill='currentColor' />
                        </div>
                    </div>
                </div>
                <div className="px-1">
                    <p className="text-sm font-bold truncate text-white group-hover:text-violet-400 transition-colors">{song.title}</p>
                    <p className="text-xs text-white/50 truncate">{song.artist}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="p-4 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer animate-scale-in"
            onClick={() => onPlay(song)}>
            <div className="relative rounded-2xl overflow-hidden mb-4 border border-white/5 shadow-2xl">
                <img
                    src={song.cover}
                    alt={song.title}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0f172a]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-14 h-14 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-violet-500 hover:text-white">
                        <Play className='w-6 h-6 ml-1' fill='currentColor' />
                    </div>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-pink-500">
                    <Heart size={14} />
                </button>
            </div>
            
            <div className="space-y-1 px-1">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold truncate text-white group-hover:text-violet-400 transition-colors">{song.title}</h3>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md">
                        {song.duration}
                    </span>
                </div>
                <p className="text-sm text-white/50 font-medium">{song.artist}</p>
                <div className="pt-3 flex items-center gap-2 text-[11px] text-white/30 font-bold uppercase tracking-tighter">
                    <span className="truncate max-w-[120px]">{song.album}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span>HD Audio</span>
                </div>
            </div>
        </div>
    )
}

export default SongCard;