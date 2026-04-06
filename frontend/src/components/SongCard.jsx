import React from 'react'
import {Play,Clock} from "lucide-react"


const SongCard=({song,onPlay,variant ="grid"})=>{
    if(variant==="row"){
        return(
            <div
            className='min-w-[160px] song-card-hover group cursor-pointer'
            onClick={()=>onPlay(song)}
            >
                <div className='relative rounded-xl overflow-hidden mb-2'>
                      <img 
                      src={song.cover}
                      alt={song.title} 
                      className='w-full aspect-square object-cover'
                      />
                   <div className="play-overlay absolute inset-0 bg-[#3b2f63]/60 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shadow-glow">
                        <Play
                          className='w-5 h-5 text-white ml-0.5'
                          fill='currentColor'
                        />
                      </div>
                   </div>
                </div>
                <p className="text-sm font-medium truncate text-[#3b2f63]">{song.title}</p>
                <p className="text-xs text-[#3b2f63]/70 truncate">{song.artist}</p>
            </div>
        )
    }
    return(
        <div className="glass-panel p-3 song-card-hover group cursor-pointer hover:shadow-glow-sm transition-all duration-300"
         onClick={()=>onPlay(song)}>
            <div className="relative rounded-lg overflow-hidden mb-3">
                <img 
                src={song.cover}
                alt={song.title} 
                className="w-full aspect-square object-cover"
                />
                <div className="play-overlay absolute inset-0 bg-[#3b2f63]/60 flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-glow">
                    <Play
                          className='w-6 h-6 text-white ml-0.5'
                          fill='currentColor'
                    />
                 </div>
                </div>
            </div>
            <h3 className="text-sm font-semibold truncate text-[#3b2f63]">{song.title}</h3>
            <p className="text-xs text-[#3b2f63]/70">{song.artist}</p>
            <div className="flex items-center justify-between mt-2">
                <span className='text-xs text-[#3b2f63]/60'>{song.album}</span>
                <span className="flex items-center gap-1 text-xs text-[#3b2f63]/60">
                    <Clock 
                    className='w-3 h-3'
                    />
                    {song.duration}
                </span>
            </div>
        </div>
    )
}

export default SongCard;