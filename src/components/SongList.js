import React from 'react'
import SongItem from './SongItem'
import songs from '../data/songs.json'
import '../styles/SongList.css'

function SongList({songList}) {
    return (
        <div className="listContainer">
            <h2>Up next</h2>
            <ul className="songList">
                {songList.map( (songId, i) => <SongItem key={i} song={songs.find(song => song.id === songId)} />)}
            </ul>
        </div>
    )
}

export default SongList
