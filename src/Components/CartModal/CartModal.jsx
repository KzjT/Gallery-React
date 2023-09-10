import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { CartContext } from "../../contexts/CartContext";

const CartModal = ({ show, onHide }) => {
    const { items } = useContext(CartContext); // Cambiar cartItems a items

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Carrito de Compras</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {items && items.length > 0 ? ( // Cambiar cartItems a items
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                {item.name} - Cantidad: {item.quantity}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>El carrito de compras está vacío.</p>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default CartModal;