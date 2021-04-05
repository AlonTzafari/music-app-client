import React from 'react'
import {useParams} from 'react-router-dom'

function Song(props) {
    const {id} = useParams();
    return (
        <div className="song page">
            {`song ID: ${id}`}
        </div>
    )
}

export default Song
