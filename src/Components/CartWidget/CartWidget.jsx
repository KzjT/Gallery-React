import React, { useContext, useState } from "react";
import "./CartWidget.scss";
import cartt from "../../assets/cartt.svg";
import emptyCart from "../../assets/carrito_vacio.webp";
import {notifyClearAllCartWidget, notifyRemoveItemCartWidget } from "../../helpers/noti-toasty"
import {  ToastContainer } from "react-toastify";
import { CartContext } from "../../contexts/CartContext";
import { Modal, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { items, removeItem, clear, totalWidget, formatter2, total, scrollToTop } =
    useContext(CartContext);
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
            height: "auto",
            bgcolor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
          <h2 id="cart-modal-title">Cart</h2>

          {items.length === 0 ? (
            <div className="cart-empty-message">
              <p>You don't have anything added, add your first article!</p>
              <div className="cart-empty-imgCont">
                <img
                  src={emptyCart}
                  alt="Empty Cart"
                  className="cart-empty-img"
                />
              </div>
              <div className="button-container">
                <div className="cart-buttons">
                  <Link
                    to="/Gallery"
                    className="btn btn-primary"
                    type="button"
                    onClick={() => {
                      handleToggleModal();
                      scrollToTop();
                    }}
                  >
                    Explorer
                  </Link>

                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={handleToggleModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div id="cart-modal-description">
              <ul className="ul-modal-description">
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
                        notifyRemoveItemCartWidget()
                      }}
                    >
                      🗑
                      <ToastContainer />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="total">
                Total: {formatter2.format(total())}
                <Link to="/checkout" className="go-pay-button btn btn-success">
                  Go Pay
                </Link>
              </div>
              <div className="actions">
                <button
                  className="clear-button btn btn-dark"
                  type="button"
                  onClick={() => {
                    notifyClearAllCartWidget(); 
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
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default CartWidget;
