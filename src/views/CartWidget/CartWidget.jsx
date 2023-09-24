import React, { useContext, useState, useEffect } from "react";
import "./CartWidget.scss";
import emptyCart from "../../assets/carrito_vacio.webp";
import { notifyClearAllCartWidget, notifyRemoveItemCartWidget } from "../../helpers/noti-toasty";
import { ToastContainer } from "react-toastify";
import { CartContext } from "../../contexts/CartContext";
import { Modal, Box } from "@mui/material";
import { Link } from "react-router-dom";


export const CartWidget = () => {
  const { items, removeItem, clear, totalWidget, formatter2, total, scrollToTop,setItems } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [cartLoaded, setCartLoaded] = useState(false);

  useEffect(() => {
    if (!cartLoaded) {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setItems(parsedCart);
        setCartLoaded(true);
      }
    }
  }, [cartLoaded, setItems]);

  const scrollToTop2 = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 100);
};


  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="divCarrito" onClick={handleToggleModal}>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 cart"
          viewBox="0 0 576 512"
        >
          <path
            fill="#000000"
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
          />
        </svg>
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
                <Link to="/checkout" onClick={scrollToTop2} className="go-pay-button btn btn-success">
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
