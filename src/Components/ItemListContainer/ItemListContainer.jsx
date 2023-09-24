import React, { useState, useEffect } from 'react';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from '../../firebase/config';
import { scrollToTop } from "../../helpers/xzy"

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const productosPorPagina = 10;
    const startIndex = currentPage * productosPorPagina;
    const endIndex = (currentPage + 1) * productosPorPagina;
    const productosEnPagina = productos.slice(startIndex, endIndex);
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
    
    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            scrollToTop(window);
        }
    };

    const goToNextPage = () => {
        if (endIndex < productos.length) {
            setCurrentPage(currentPage + 1);
            scrollToTop(window);
        }
    };

    return (
        <div className='itemListContainer-sty container-fluid my-2 '>
            <div className="pagination-container">

                <ItemList productos={productosEnPagina} />

                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 0}
                    className="pagination-button pagination-top"
                >
                    Página anterior
                </button>
                <button
                    onClick={goToNextPage}
                    disabled={endIndex >= productos.length}
                    className="pagination-button pagination-top"
                >
                    Página siguiente
                </button>
            </div>
        </div>

    );
}

export default ItemListContainer;
