import React from 'react';
import "./ItemList.scss"
import Item from '../Item/Item';



export const ItemList = ({ productos }) => {
    return (
        <div className='itemList-sty container-fluid my-4 col-12 col-sm-6 col-md-12'>
            {productos.length === 0 ? (
                <div>Loading...</div>
            ) : (
                productos.map(producto => (
                    <Item key={producto.id} producto={producto} />
                ))
            )}
        </div>
    );
}

export default ItemList;