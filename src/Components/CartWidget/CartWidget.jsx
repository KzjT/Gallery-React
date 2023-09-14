import React, { useContext, useState } from "react";
import "./CartWidget.scss";
import cartt from "../../img/cartt.svg";
import { CartContext } from "../../contexts/CartContext";
import { Modal, Box, Button } from "@mui/material";

export const CartWidget = () => {
  const { totalWidget, items } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="divCarrito" onClick={handleToggleModal}>
      <img className="cart" src={cartt} alt="cart" />
      <span className="spanCart">{totalWidget}</span>
      <Modal
        open={showModal}
        onClose={handleToggleModal}
        aria-labelledby="cart-modal-title"
        aria-describedby="cart-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
          <h2 id="cart-modal-title">Carrito de Compras</h2>
          <div id="cart-modal-description">
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
          <Button onClick={handleToggleModal}>Cerrar Carrito</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CartWidget;
