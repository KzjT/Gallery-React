import React, { useState, useEffect } from 'react';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import dataJson from '../../data/data.json';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();

    const fetchData = () => {
        return new Promise((resolve) => {
            
            setTimeout(() => {
                const data = dataJson; 
                resolve(data);
            }, 1000); 
        });
    };

    useEffect(() => {
        fetchData().then((data) => {
            if (categoryId) {
                const productosFiltrados = data.filter(prod => prod.category === categoryId);
                setProductos(productosFiltrados);
            } else {
                setProductos(data);
            }
            console.log(data.map(producto => producto.category));
        });
    }, [categoryId]);

    return (
        <div className='itemListContainer-sty container-fluid my-4 '>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;