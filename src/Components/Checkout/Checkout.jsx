import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./Checkout.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Form, Button } from "react-bootstrap";
import Order from "../Order/Order";

const Checkout = () => {
    const { items, formatter2, removeItem } = useContext(CartContext);
    const [orderCounter, setOrderCounter] = useState(
        parseInt(localStorage.getItem("orderCounter")) || 2000
    );
    const [purchaseSuccess, setPurchaseSuccess] = useState(false);
    const [buyerData, setBuyerData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
    });
    const [checkoutComplete, setCheckoutComplete] = useState(false);

    const handleInputChange = (ev) => {
        setBuyerData((prev) => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }));
    };

    const total = () => {
        return items.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.price,
            0
        );
    };

    const handleBuy = () => {
        if (
            !items.length ||
            !buyerData.firstName ||
            !buyerData.lastName ||
            !buyerData.email ||
            !buyerData.confirmEmail ||
            buyerData.email !== buyerData.confirmEmail ||
            !buyerData.email.includes("@")
        ) {
            toast.error(`Please complete all fields correctly before purchasing`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        const orderId = orderCounter.toString();
        setOrderCounter(orderCounter + 1);

        const order = {
            buyer: buyerData,
            items,
            total: total(),
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order)
            .then(({ id }) => {
                if (id) {
                    setBuyerData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        confirmEmail: "",
                    });

                    setTimeout(() => {
                        setPurchaseSuccess(true);
                    }, 1200);

                    toast.success(
                        `Your order: #${orderId} was successful. You will be redirected to home. Thanks for shopping with us.`,
                        {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        }
                    );
                    setCheckoutComplete(true);
                }
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    };

    useEffect(() => {
        localStorage.setItem("orderCounter", orderCounter.toString());
    }, [orderCounter]);

    const orderId = orderCounter.toString();

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>

            {!checkoutComplete && (
                <div>
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
                                            <button className="btn btn-primary btnCount">-</button>
                                            {item.quantity}
                                            <button className="btn btn-primary btnCount">+</button>
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
                        >
                            Buy
                        </Button>
                    </Form>
                </div>
            )}
            <ToastContainer />
            {purchaseSuccess && (
                <Order
                    id={orderId}
                    firstName={buyerData.firstName}
                    lastName={buyerData.lastName}
                    email={buyerData.email}
                    items={items}
                    total={total()}
                />
            )}
        </div>
    );
};

export default Checkout;
