import '../styles/GalleryItem.css'
import {Link} from 'react-router-dom'

function GalleryItem({item, type}) {
    const src = type === "songs" ?
        // `../images/albums/${albums.find(album => album.name === item.album).cover_img}` :
        `http://img.youtube.com/vi/${item.id}/0.jpg` :
        `../images/${type}/${item.cover_img}`;
    //pages
    const page = getPage(type);
    
    return (
        <li className="galleryItem">
            <Link to={`/${page}/${item.id}`}>
                <img className="galleryImg" src={src} alt=""/>
                <p className="description">{item.name}</p>
            </Link>
        </li>
    )
}

export default GalleryItem

const getPage = itemType => {
    switch (itemType) {
        case "songs":
            return "song";
        case "albums":
            return "album";
        case "artists":
            return "artist";
        case "playlists":
            return "playlist";
        default:
            return "unknown";
    }
}