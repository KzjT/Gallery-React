import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./OrderDetails.scss";
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";
import { CartContext } from "../../contexts/CartContext";
import Error404 from "../Error404/Error404";

const OrderDetails = () => {
    const { formatter2, clear } = useContext(CartContext);
    const [order, setOrder] = useState(null);
    const currentDateTime = new Date();
    const formattedDateTime = `${currentDateTime.toLocaleDateString()}, ${currentDateTime.toLocaleTimeString()}`;
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        const orderDocRef = doc(ordersCollection, id);

        getDoc(orderDocRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setOrder(snapshot.data());
                } else {
                    console.error("La orden no existe");
                }
            })
            .catch((error) => {
                console.error("Error al obtener la orden:", error);
            });
    }, [id]);

    if (!order) {
        return (
            <div>
                <Error404 />
            </div>
        );
    }

    return (
        <div className="order-details">
            <div className="order-content">
                <h3 className="order-header orderTittle">Order Details</h3>
                <div className="order-info">
                    <p className="order-id">Order:  #{id}</p>
                    <p className="order-date">Date of purchase: {formattedDateTime}</p>
                </div>
                <div className="order-items">
                    <h4 className="items-header">Order Items:</h4>
                    <ul className="item-list">
                        {order.items.map((item) => (
                            <li key={item.id} className="item">
                                <div className="product-info">
                                    <img src={item.img} alt={item.name} className="product-image" />
                                    <div className="product-details">
                                        <p className="product-name">{item.name}</p>
                                        <p className="item-quantity">×{item.quantity}</p>
                                        <p className="item-price">{formatter2.format(item.price * item.quantity)}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="order-summary">
                        <p>Subtotal: {formatter2.format(order.total)}</p>
                        <p>Shipping: $0 FREE</p>
                        <p className="total-order">Total: {formatter2.format(order.total)}</p>
                    </div>
                </div>
            </div>
            <div className="order-actions">
                <Link to="/" onClick={clear} className="btn btn-primary btn-order btn-home-Order">
                    Home
                </Link>
            </div>
        </div>
    );
};

export default OrderDetails;
