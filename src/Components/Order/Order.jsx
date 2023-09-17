import React, { useContext } from 'react';
import "./Order.scss";
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const Order = ({ id, items, total }) => {
    const { formatter2 } = useContext(CartContext);

    if (!id) {
        return <div>No order information available.</div>;
    }


    const currentDateTime = new Date();
    const formattedDateTime = `${currentDateTime.toLocaleDateString()}, ${currentDateTime.toLocaleTimeString()}`;

    return (
        <div className="order-details">
            <div className="order-content">
                <h3 className="order-header"> Order Details</h3>
                <div className="order-info">
                    <p className="order-id">Order #{id}</p>
                    <p className="order-date">Fecha de compra: {formattedDateTime}</p>
                </div>
                <div className="buyer-info">
                </div>
                <div className="order-items">
                    <h4 className="items-header"> Order Items:</h4>
                    <ul className="item-list">
                        {items.map((item) => (
                            <li key={item.id} className="item">
                                <div className="product-info">
                                    <img src={item.img} alt={item.name} className="product-image" />
                                    <div className="product-details">
                                        <p className="product-name">{item.name}</p>
                                        <p className="item-quantity">×{item.quantity}</p>
                                        <p className="item-price">{formatter2.format(item.price)}</p>
                                        <hr/>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="order-summary">
                        <p>Subtotal: {formatter2.format(total)}</p>
                        <p>Envío: $0</p>
                        <p className='total-order'>Total: {formatter2.format(total)}</p>
                    </div>
                </div>
            </div>
            <div className="order-actions">
                <Link to="/" className="btn btn-primary btn-order">Home</Link>
            </div>
        </div>
    );
};

export default Order;
