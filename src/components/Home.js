import React, {lazy, Suspense} from 'react'
import songs from '../data/songs.json'
import playlists from '../data/playlists.json'
import artists from '../data/artists.json'
import albums from '../data/albums.json'
import '../styles/Home.css'
import ErrorBoundary from './ErrorBoundary'
const Gallery = lazy( () => import('./Gallery') );  

function Home() {
    return (
        <div className="home page">
            <ErrorBoundary>
                <Suspense fallback={<h1>Loading...</h1>} >
                    <Gallery items={songs} type="songs" title="Top Songs"/>
                    <Gallery items={playlists} type="playlists" title="Top Playlists"/>
                    <Gallery items={artists} type="artists" title="Top Artists"/>
                    <Gallery items={albums} type="albums" title="Top Albums"/>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default Home
