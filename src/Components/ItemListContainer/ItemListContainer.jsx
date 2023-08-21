import React, { useEffect, useState } from 'react';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();

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
                if (categoryId) {
                    const productosFiltrados = data.filter(prod => prod.category === categoryId);
                    setProductos(productosFiltrados);
                } else {
                    setProductos(data);
                }
                
                // Imprime las categorías de los productos
                console.log(data.map(producto => producto.category));
            })
            .catch(error => console.log(error));
    }, [categoryId]);

    return (
        <div className='itemListContainer-sty'>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;
