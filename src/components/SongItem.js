import React from 'react'
import '../styles/SongItem.css'
import {Link, useLocation} from 'react-router-dom'

function SongItem({song}) {
    const path = useLocation().pathname.split("/");
    const origin = path[1]
    const originId = origin === "song" ? null : path[2];
    
    return (
        <Link className="songItem" to={`/song/${song.id}?${origin}=${originId}`}>
            <img src={`http://img.youtube.com/vi/${song.id}/0.jpg`} alt="" />
            <div className="nameArt">
                <span className="name">{song.name}</span>
                <span className="artist">{song.artist}</span>
            </div>
            <span className="length">{song.length}</span>
        </Link>
    )
}

export default SongItem
