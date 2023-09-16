import React, { useContext, useState } from "react";
import "./CartWidget.scss";
import cartt from "../../assets/cartt.svg";
import { CartContext } from "../../contexts/CartContext";
import { Modal, Box } from "@mui/material";

export const CartWidget = () => {
  const { removeItem, clear, totalWidget, items } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const total = () => items.reduce((acumulador, valorActual) => acumulador + valorActual.quantity * valorActual.price, 0);

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
            height: "auto",
            bgcolor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
          <h2 id="cart-modal-title">Cart</h2>
          <div id="cart-modal-description">
            <ul>
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <img
                    className="product-image"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="item-details">
                    <span className="product-name">{item.name}</span>
                    <span className="product-quantity">X{item.quantity}</span>
                  </div>
                  <button
                    type="button"
                    className="remove-button btn btn-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    -
                  </button>
                </li>
              ))}
            </ul>
            <div className="total">Total: {total()}</div>
            <div className="actions">
              <button
                className="pay-button btn btn-success"
                type="button"
                onClick={() => console.log("Go Pay")}
              >
                Go Pay
              </button>
              <div className="bottom-actions">
                <button
                  className="clear-button btn btn-dark"
                  type="button"
                  onClick={clear}
                >
                  Clear All
                </button>
                <button
                  className="close-button btn btn-danger"
                  type="button"
                  onClick={handleToggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CartWidget;




