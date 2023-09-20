import React from 'react';
import './Gallery.scss';
import ItemListContainer from '../../ItemListContainer/ItemListContainer';
;

export const Gallery = ({ productos }) => {
    return (
        <div className='container-fluid '>
            <h1 className='h1-tittle'>Gallery</h1>
            <hr />
            <ItemListContainer productos={productos} />
        </div>

    )
}

export default Gallery;