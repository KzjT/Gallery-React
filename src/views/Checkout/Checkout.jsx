import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./Checkout.scss";
import { ToastContainer } from "react-toastify";
import emptyCart from "../../assets/carrito_vacio.webp";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Components/Loading/Loading"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { buildXZY, validateBuyerData } from "../../helpers/xzy";
import { notifyErrorCheckout, notifySuccessCheckout } from "../../helpers/noti-toasty";
import { Form, Button } from "react-bootstrap";
import OrderDetails from "../OrderDetail/OrderDetails";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
    const { items, formatter2, total, clear, removeItem } = useContext(CartContext);
    const [purchaseSuccess, setPurchaseSuccess] = useState(false);
    const [checkoutComplete, setCheckoutComplete] = useState(false);
    const [processingOrder, setProcessingOrder] = useState(false);
    const [orderCounter, setOrderCounter] = useState(
        parseInt(localStorage.getItem("orderCounter")) || 2000
    );
    const [buyerData, setBuyerData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
    });
    const db = getFirestore();
    const orderCollection = collection(db, "orders");


    const handleInputChange = (ev) => {
        setBuyerData((prev) => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }));
    };
    const navigate = useNavigate();

    const handleBuy = () => {
        if (!validateBuyerData(buyerData, items)) {
            notifyErrorCheckout();
            return;
        }

        const orderId = orderCounter.toString();
        setOrderCounter(orderCounter + 1);
        const xzy = buildXZY();
        const order = {
            Fsociety: xzy,
            buyer: buyerData,
            items,
            total: total(),
        };

        setProcessingOrder(true);

        addDoc(orderCollection, order)
            .then(({ id }) => {
                if (id) {
                    clear();
                    notifySuccessCheckout(orderId);
                    setCheckoutComplete(true);
                    setPurchaseSuccess(true);
                    navigate(`/myOrder/${id}`);

                }
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            })
            .finally(() => {
                setProcessingOrder(false);
            });
    };

    if (!items || items.length === 0) {
        return (
            <div className="checkout-container">
                <img src={emptyCart} alt="Empty Cart" />
                <div className="order-actions">
                    <Button onClick={() => { clear(); navigate('/'); }} className="btn btn-primary btn-order">
                        Home
                    </Button>
                </div>
            </div>
        );
    }

    if (processingOrder) {
        return (
            <div className="checkout-container footer-content">
                <h2>Checkout</h2>
                <Loading />
            </div>
        );
    }

    return (
        <div className="checkout-container footer-content">
            <h2>Checkout</h2>

            <table className="product-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Unit price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td className="product-image-cell">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="product-image"
                                />
                            </td>
                            <td>{item.name}</td>
                            <td>{formatter2.format(item.price)}</td>
                            <td>
                                <div className="btn-checkout">
                                    {item.quantity}
                                </div>
                            </td>
                            <td>{formatter2.format(item.quantity * item.price)}</td>
                            <td>
                                <button
                                    type="button"
                                    className="remove-button btn btn-danger"
                                    onClick={() => {
                                        removeItem(item.id);
                                    }}
                                >
                                    🗑
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {!checkoutComplete && (
                <div>
                    <table className="product-table">
                    </table>
                    <div className="total-container">
                        <span>Total:</span>
                        <span className="total-amount">{formatter2.format(total())}</span>
                    </div>
                    <Form className="buyer-form">
                        <Form.Group controlId="firstName">
                            <Form.Label className="label">First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={buyerData.firstName}
                                onChange={handleInputChange}
                                placeholder="Name"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={buyerData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmailConfirm">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={buyerData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmailConfirm">
                            <Form.Label>Confirm Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="confirmEmail"
                                value={buyerData.confirmEmail}
                                onChange={handleInputChange}
                                placeholder="Confirm Email"
                                required
                            />
                        </Form.Group>
                        <Button
                            type="button"
                            onClick={handleBuy}
                            variant="primary"
                            className="buy-button"
                            disabled={processingOrder}
                        >
                            {processingOrder ? 'Processing...' : 'Buy'}
                        </Button>
                    </Form>
                </div>
            )}
            <ToastContainer />

            {purchaseSuccess && (
                <div>
                    <OrderDetails
                        id={orderCounter.toString()}
                        firstName={buyerData.firstName}
                        lastName={buyerData.lastName}
                        email={buyerData.email}
                        items={items}
                        total={total}
                    />
                </div>
            )}
        </div>
    );
};

export default Checkout;
