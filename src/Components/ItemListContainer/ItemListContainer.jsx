import React, { useState, useEffect } from 'react';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from '../../firebase/config';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const refProductos = collection(db, "productos");
        const q = categoryId ? query(refProductos, where("category", "==", categoryId)) : refProductos;

        getDocs(q)
            .then(snapshot => {
                if (snapshot.size === 0) {
                    console.log(categoryId ? `No results for category: ${categoryId}` : "No results for all products");
                } else {
                    setProductos(snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    })));
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [categoryId]);

    return (
        <div className='itemListContainer-sty container-fluid my-4 col-12'>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;
