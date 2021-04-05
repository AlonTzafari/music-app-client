import React from 'react'
import Gallery from './Gallery'
import songs from '../data/songs.json'
import playlists from '../data/playlists.json'
import artists from '../data/artists.json'
import albums from '../data/albums.json'
import '../styles/Home.css'

function Home() {
    return (
        <div className="home page">
            <Gallery items={songs} type="songs" title="Top Songs"/>
            <Gallery items={playlists} type="playlists" title="Top Playlists"/>
            <Gallery items={artists} type="artists" title="Top Artists"/>
            <Gallery items={albums} type="albums" title="Top Albums"/>
        </div>
    )
}

export default Home
