import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./Checkout.scss";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const { items, clear, formatter2 } = useContext(CartContext);
    const [buyerData, setBuyerData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (ev) => {
        setBuyerData((prev) => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }));
    };

    const total = () => {
        return items.reduce((acumulador, valorActual) => acumulador + valorActual.quantity * valorActual.price, 0);
    };

    const handleBuy = () => {
        if (!buyerData.firstName || !buyerData.lastName || !buyerData.email) {
            toast.error(`Please complete all fields before purchasing`, {
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
                    })
                    clear()
                    toast.success(`Your order: ${id} was successful.You will be redirected to home. Thanks for shopping with us.`);
                    setTimeout(() => {
                        navigate('/');
                    }, 6000);
                }

            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

        clear();
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Unit price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{formatter2.format(item.price)}</td>
                            <td>{item.quantity}</td>
                            <td>{formatter2.format(item.quantity * item.price)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="total-container">
                <span>Total:</span>
                <span className="total-amount">{formatter2.format(total())}</span>
            </div>

            <form className="buyer-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={buyerData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={buyerData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={buyerData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="button" onClick={handleBuy} className="buy-button">
                    Buy
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;
