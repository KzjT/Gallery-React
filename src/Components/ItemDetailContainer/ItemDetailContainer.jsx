import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.scss";
import { useParams } from "react-router-dom";
import ItemDetail from "../../views/ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        const fetchItem = async () => {
            try {
                const refDoc = doc(db, "productos", id);
                const snapshot = await getDoc(refDoc);

                if (snapshot.exists()) {
                    setItem({ id: snapshot.id, ...snapshot.data() });
                } else {
                    console.log("El documento no existe");
                }
            } catch (error) {
                console.error("Error al obtener el documento:", error);
            }
        };

        fetchItem();
    }, [id]);

    return (
        <div className="container-fluid my-5 itemDetailContainer">
            {item ? <ItemDetail producto={item} /> : <Loading />}
        </div>
    );
};

export default ItemDetailContainer;
