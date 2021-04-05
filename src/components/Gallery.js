import React from 'react'
import '../styles/Gallery.css'
import GalleryItem from './GalleryItem'
import {getRandomItems} from '../utils'

function Gallery({items, type, title}) {
    const itemList = type === "songs" ? getRandomItems(items, 5) : items;
    return (
        <>
            <h2 className="galleryTitle">{title}</h2>
            <ul className="gallery">
                {itemList.slice(0, 5).map((item, i) => <GalleryItem key={i} item={item} type={type}/>)}
            </ul>
        </>
    )
}

export default Gallery

