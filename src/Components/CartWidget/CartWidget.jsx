import React, { useContext, useState } from "react";
import "./CartWidget.scss";
import cartt from "../../assets/cartt.svg";
import { toast, ToastContainer } from 'react-toastify';
import { CartContext } from "../../contexts/CartContext";
import { Modal, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { items, removeItem, clear, totalWidget, formatter2 } = useContext(CartContext);

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
                    <span className="product-quantity">{item.quantity}x</span>
                  </div>
                  <button
                    type="button"
                    className="remove-button btn btn-danger"
                    onClick={() => {
                      removeItem(item.id);
                      toast.info("removed product", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    }}
                  >
                    -
                    <ToastContainer />
                  </button>
                </li>
              ))}
            </ul>
            <div className="total">Total: {formatter2.format(total())}</div>
            <div className="actions">
              <Link to="/checkout" className="pay-button btn btn-success">
                Go Pay
              </Link>
              <div className="bottom-actions">
                <button
                  className="clear-button btn btn-dark"
                  type="button"
                  onClick={() => {
                    toast.info("Cart clear", {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                    clear();
                  }}
                >
                  Clear All
                </button>
                <button
                  className="close-button btn btn-danger"
                  type="button"
                  onClick={handleToggleModal}
                >
                  Close
                  <ToastContainer />
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

