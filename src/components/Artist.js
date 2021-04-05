import React from 'react'
import {useParams} from 'react-router-dom'
import artists from '../data/artists.json'
import '../styles/Artist.css'
import SongList from './SongList'
import ErrorBoundary from './ErrorBoundary'


function Artist() {
    const {id} = useParams();
    const artist = artists.find(artist => artist.id === id);
    return (
        <div className="artist page">
            <ErrorBoundary>
                <img src={`../images/artists/${artist.cover_img}`} alt=""/>
                <SongList songList={artist.songs} title={artist.name}/>
            </ErrorBoundary>
        </div>
    )
}

export default Artist

