import React from 'react'
import {useParams} from 'react-router-dom'
import albums from '../data/albums.json'
import '../styles/Album.css'
import SongList from './SongList'

function Album() {
    const {id} = useParams();
    const album = albums.find(album => album.id === id);
    return (
        <div className="album page">
            <img src={`../images/albums/${album.cover_img}`} alt=""/>
            <SongList songList={album.songs} title={album.name}/>
        </div>
    )
}

export default Album
