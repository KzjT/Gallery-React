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
            }, 3000);
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
            console.log(data.map((producto) => ({ id: producto.id, name: producto.name, stock: producto.cant })));
        });
    }, [categoryId]);

    return (
        <div className='itemListContainer-sty my-4 col-12'>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;