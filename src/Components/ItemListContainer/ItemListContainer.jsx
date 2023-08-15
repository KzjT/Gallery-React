import React, { useEffect, useState } from 'react';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {

        const url = "../data/data.json";

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error en la respuesta");
                }
                return response.json();
            })
            .then(data => {
                setProductos(data);
                console.log(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='itemListContainer-sty'>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;