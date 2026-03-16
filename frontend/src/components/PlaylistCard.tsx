import {Play} from 'lucide-react';
import {useState} from "react"

const PlaylistCard=({playlist})=> {
    const[hovered,setHovered]=useState(false);
  return (
    <div
    className='relative glass-panel overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-glow'
     onMouseEnter={()=>setHovered(true)}
     onMouseLeave={()=>setHovered(false)}>
        <div 
        className="relative h-44 overflow-hidden">
            <img 
            src={playlist.cover} 
            alt={playlist.title}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"/>
            <div className={`absolute bottom-3 right w-11 h-11 rounded-full gradient-bg flex items-center justify-center shadow-glow transition-all duration-300 ${
                hovered ? "opacity-100 translate-y-0": "opacity-0 translate-y-2"} `}>
                    <Play
                    className='w-5 h-5 text-primary-foreground  ml-0.5'
                    fill='currentColor'/>
                </div>
                </div>
                <div className="p-4">
                    <h3 className="font-semibold">{playlist.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        {playlist.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                        {playlist.songCount} songs
                    </p>
                </div>
                {hovered &&(
                    <div className="absolute top-2 left-2 glass-panel-strong px-3 py-1.5 rounded-lg animate-slide-up z-10">
                        <p className="text-xs font-medium text-foreground">
                            Preview:{playlist.songCount} tracks
                        </p>
                    </div>
                )}
        </div>
  )
}

export default PlaylistCard;