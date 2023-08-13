import { useEffect, useState } from 'react';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import data from '../../data/data.json';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Utiliza directamente la variable "data" que ya has importado
        setProductos(data);
        console.log(data); // Puedes mover este console.log aquí para mostrar los datos

    }, []);

    return (
        <div className='itemListContainer-sty'>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;