import React, { useContext } from 'react';
import "./Order.scss"
import { CartContext } from '../../contexts/CartContext';

const Order = ({ order }) => {
    const { formatter2 } = useContext(CartContext);

    return (
        <div className="order-details">
            <h3>Order Details</h3>
            <p>Order ID: {order.id}</p>
            <p>Total Amount: {formatter2.format(order.total)}</p>
            <h4>Buyer Information:</h4>
            <p>First Name: {order.buyer.firstName}</p>
            <p>Last Name: {order.buyer.lastName}</p>
            <p>Email: {order.buyer.email}</p>
            <h4>Order Items:</h4>
            <ul>
                {order.items.map((item) => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity} - Price: {formatter2.format(item.price)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Order;