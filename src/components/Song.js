import React from 'react'
import {useParams} from 'react-router-dom'
import '../styles/Song.css'
import songs from '../data/songs.json'
 
function Song(props) {
    const {id} = useParams();
    const song = songs.find(song => song.id === id);
    return (
        <div className="song page">
            <div className="contentGrid">
                <div className="player">
                    <iframe src={song.youtube_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div>{`song list`}</div>
            </div>
        </div>
    )
}

export default Song
