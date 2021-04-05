import React from 'react'
import '../styles/SongItem.css'

function SongItem({song}) {
    return (
        <div className="songItem">
            {song.name}
        </div>
    )
}

export default SongItem
