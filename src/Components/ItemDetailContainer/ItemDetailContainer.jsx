import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.scss";
import { useParams } from "react-router-dom";
import datA from '../../data/data.json';

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const itemData = datA.find(prod => prod.id === id);
        if (itemData) {
            setItem(itemData);
        } else {
            console.log("No se encontró ese producto");
        }
    }, [id]);

    return (
        <div className="container-fluid my-5 itemDetailContainer">
            {item ? <ItemDetail producto={item} /> : <p>Loading...</p>}
        </div>
    );
};

export default ItemDetailContainer;