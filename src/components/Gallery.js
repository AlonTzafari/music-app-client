import React from 'react'
import '../styles/Gallery.css'
import GalleryItem from './GalleryItem'

function Gallery({items, type, title}) {
    return (
        <>
            <h2 className="galleryTitle">{title}</h2>
            <ul className="gallery">
                {items.slice(0, 5).map((item, i) => <GalleryItem key={i} item={item} type={type}/>)}
            </ul>
        </>
    )
}

export default Gallery

