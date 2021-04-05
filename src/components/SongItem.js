import React from 'react'
import '../styles/SongItem.css'

function SongItem({song}) {
    return (
        <div className="songItem">
            <img src={`http://img.youtube.com/vi/${song.id}/0.jpg`} alt="" />
            <div className="nameArt">
                <span className="name">{song.name}</span>
                <span className="artist">{song.artist}</span>
            </div>
            <span className="length">{song.length}</span>
        </div>
    )
}

export default SongItem
