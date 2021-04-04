import React from 'react'
import '../styles/Gallery.css'

function Gallery({items}) {
    return (
        <ul className="gallery">
            {items.slice(0, 5).map((item, i) => <li key={i}>{item.name}</li>)}
        </ul>
    )
}

export default Gallery
