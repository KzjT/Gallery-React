import React, { useContext } from 'react';
import "./Order.scss"
import { CartContext } from '../../contexts/CartContext';


const Order = ({ id, firstName, lastName, email, items, total }) => {
    const { formatter2 } = useContext(CartContext);

    if (!id) {
        return <div>No order information available.</div>;
    }

    return (
        <div className="order-details">
            <h3> 🟠 Order Details</h3>
            <p>  Order ID: #{id}</p>
            <p>  Total Amount: {formatter2.format(total)}</p>
            <h4> 🟠 Buyer Information:</h4>
            <p>  First Name: {firstName}</p>
            <p>  Last Name: {lastName}</p>
            <p>  Email: {email}</p>
            <h4> 🟠 Order Items:</h4>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <p>Product: {item.name}</p>
                        <p>Cant: {item.quantity}</p>
                        <p>Price: {formatter2.format(item.price)}</p>
                    </li>
                ))}
            </ul>
            <button className='btn btn-primary mx-4 btn-Order'>Home</button>
        </div>
    );
};

export default Order;