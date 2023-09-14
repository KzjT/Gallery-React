import React, { useContext, useState } from "react";
import { Modal, Backdrop, Fade, Button } from "@mui/material";
import { CartContext } from "../../contexts/CartContext";

const CartModal = ({ show, onHide }) => {
    const { items } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(show);

    const handleClose = () => {
        setIsOpen(false);
        onHide();
    };

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={isOpen}>
                <div className="modal-container">
                    <h2 id="modal-title">Carrito de Compras</h2>
                    <div id="modal-description">
                        {items && items.length > 0 ? (
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
                    </div>
                    <Button onClick={handleClose} variant="contained" color="primary">
                        Cerrar
                    </Button>
                </div>
            </Fade>
        </Modal>
    );
};

export default CartModal;
