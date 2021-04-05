import React from 'react'
import {useParams, useLocation} from 'react-router-dom'
import '../styles/Song.css'
import songs from '../data/songs.json'
import albums from '../data/albums.json'
import artists from '../data/artists.json'
import playlists from '../data/playlists.json'
import SongList from './SongList';

function useQueary() {
    const quearyParams = new URLSearchParams(useLocation().search);
    const artist = quearyParams.get("artist");
    const album = quearyParams.get("album");
    const playlist = quearyParams.get("playlist");
    return {artist, album, playlist};
}

function findSongList (params) {
    if (params.artist) return artists.find(artist => artist.id === params.artist).songs;
    if (params.album) return albums.find(album => album.id === params.album).songs;
    if (params.playlist) return playlists.find(playlist => playlist.id === params.playlist).songs;
    return null;
}
 
function Song() {
    const {id} = useParams();
    const quearyParams = useQueary();
    const song = songs.find(song => song.id === id);
    const songList = findSongList(quearyParams);
    return (
        <div className="song page">
            <div className="contentGrid">
                <div className="player">
                    <h2>{song.name}</h2>
                    <iframe src={song.youtube_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className="videoDetails">
                        <p>{`Artist: ${song.artist}`}</p>
                        <p>{`Album: ${song.album}`}</p>
                        <h3>Lyrics</h3>
                        <p>{song.lyrics}</p>
                    </div>
                </div>
                <SongList songList={songList}/>
            </div>
        </div>
    )
}

export default Song
