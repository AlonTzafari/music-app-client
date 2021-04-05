import React from 'react'
import {useParams} from 'react-router-dom'
import artists from '../data/artists.json'
import '../styles/Artist.css'
import SongList from './SongList'

function Artist() {
    const {id} = useParams();
    const artist = artists.find(artist => artist.id === id);
    return (
        <div className="artist page">
            <img src={`../images/artists/${artist.cover_img}`} alt=""/>
            <SongList songList={artist.songs} title={artist.name}/>
        </div>
    )
}

export default Artist

