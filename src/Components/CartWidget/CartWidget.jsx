import React, { useContext, useState } from "react";
import "./CartWidget.scss"
import  cartt  from "../../img/cartt.svg"
import { CartContext } from "../../contexts/CartContext";
import CartModal from "../CartModal/CartModal";

export const CartWidget = () => {
    const { totalWidget } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="divCarrito" onClick={handleShowModal}>
          <img className="cart" src={cartt} alt="cart" />
          <span className="spanCart">{totalWidget}</span>
          <CartModal show={showModal} onHide={handleCloseModal} />
        </div>
      );
    };
    
    export default CartWidget;