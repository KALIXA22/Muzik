import React from 'react'

 const LyricsModal=({song,isOpen,onClose}) =>{
    if(!isOpen||!song)return null;

    return (
    <div
    className='fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm'
    onClick={onClose}>
        <div
        className='glass-panel-strong w-full max-w-lg max-h-[80vh] mx-4 overflow-hidden animate-slide-up'
        onClick={(e)=>e.stopPropagation()}>
            <div className="flex items-center justify-between p-5 border-b border-border">
                <div className="flex items-center gap-3">
                    <img 
                    src={song.cover}
                    alt={song.title}
                    className='w-12 h-12 rounded-lg object-cover' 
                    />
                    <div>
                </div>
                <h3 className="font-semibold">{song.title}</h3>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
            </div>
        </div>
        <button className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all">
            <X className="w-5 h-5"/>
        </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[60vh] scrollbar-hide">
            <pre className='whitespace-pre-wrap text-sm leading-7 text-foreground/80 font-sans'>
                {lyrics}
            </pre>
    </div>
    </div>
  )
}

export default LyricsModal