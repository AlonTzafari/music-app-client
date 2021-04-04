import {useState} from 'react'
import albums from '../data/albums.json'
import '../styles/GalleryItem.css'

function GalleryItem({item, type}) {
    const src = type === "songs" ?
        `../images/albums/${albums.find(album => album.name === item.album).cover_img}` :
        `../images/${type}/${item.cover_img}`;
    // const [image, setImage] = useState();
    // import(src).then(image => setImage(image));
    return (
        <li className="galleryItem">
            <img className="galleryImg" src={src} alt=""/>
            <p className="description">{item.name}</p>
        </li>
    )
}

export default GalleryItem
