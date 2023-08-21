import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const url = '../data/data.json';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error en la respuesta");
                }
                return response.json();
            })
            .then(data => {
                const itemData = data.find(prod => prod.id === id);
                if (itemData) {
                    setItem(itemData);
                } else {
                    throw new Error("No se encontró ese producto");
                }
            })
            .catch(error => console.log(error));
    }, [id]);

    return (
        <div className="container my-5">
            {item ? <ItemDetail producto={item} /> : <p>Loading...</p>}
        </div>
    );
};

export default ItemDetailContainer;