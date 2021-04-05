import React from 'react'
import {useParams} from 'react-router-dom'
import playlists from '../data/playlists.json'
import '../styles/Playlist.css'
import SongList from './SongList'
import ErrorBoundary from './ErrorBoundary'


function Playlist() {
    const {id} = useParams();
    const playlist = playlists.find(playlist => playlist.id === id);
    return (
        <div className="playlist page">
            <ErrorBoundary>
                <img src={`../images/playlists/${playlist.cover_img}`} alt=""/>
                <SongList songList={playlist.songs} title={playlist.name}/>
            </ErrorBoundary>
        </div>
    )
}

export default Playlist
