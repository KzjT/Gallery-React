import React from 'react';
import "./ItemList.scss"
import Item from '../Item/Item';


export const ItemList = ({ productos }) => {
    return (
        <div className='itemList-sty'>
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