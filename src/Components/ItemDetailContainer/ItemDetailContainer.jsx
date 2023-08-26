import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.scss";
import { useParams } from "react-router-dom";
import dataJson from '../../data/data.json';

import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const fetchData = () => {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            const data = dataJson; 
            resolve(data);
        }, 3000); 
    });
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchData().then((data) => {
            const itemData = data.find(prod => prod.id === id);
            if (itemData) {
                setItem(itemData);
            } else {
                console.log("No se encontró ese producto");
            }
        });
    }, [id]);

    return (
        <div className="container-fluid my-5 itemDetailContainer">
            {item ? <ItemDetail producto={item} /> :<Loading/>}
        </div>
    );
};

export default ItemDetailContainer;