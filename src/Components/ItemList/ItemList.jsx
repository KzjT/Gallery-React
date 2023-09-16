import React from 'react';
import "./ItemList.scss"
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export const ItemList = ({ productos }) => {
    return (
        <div className='itemList-sty container-fluid '>
            {productos.length === 0 ? (
                <Loading/>
            ) : (
                productos.map(producto => (
                    <Item key={producto.id} producto={producto} />
                ))
            )}
        </div>
    );
}

export default ItemList;