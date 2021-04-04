import React from 'react'
import Gallery from './Gallery'
import songs from '../data/songs.json'
import playlists from '../data/playlists.json'
import artists from '../data/artists.json'
import albums from '../data/albums.json'
import '../styles/Home.css'

function Home() {
    return (
        <div className="home">
            <Gallery items={songs}/>
            <Gallery items={playlists}/>
            <Gallery items={artists}/>
            <Gallery items={albums}/>
        </div>
    )
}

export default Home
