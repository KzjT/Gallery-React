import React from 'react';
import './Gallery.scss';
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';


export const Gallery = ({ productos }) => {
    return (
        <div className=''>
            <h1 className='h1-tittle'>Gallery</h1>
            <ItemListContainer productos={productos} />
        </div>
    )
}

export default Gallery;