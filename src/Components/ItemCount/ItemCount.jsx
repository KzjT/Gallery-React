import React, { useState } from "react";
import "./ItemCount.scss";
import { ToastContainer, toast } from 'react-toastify'; 
import { notifyAddProduct } from "../../helpers/noti-toasty";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "react-bootstrap";

const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const handleCountSuma = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {

            toast.error(`No hay más producto disponible`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const handleCountResta = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (count <= stock) {
            onAdd(count);
            notifyAddProduct();
        } else {

            toast.error(`No hay suficiente stock`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <div className="ItemCountContainer">
            <Button
                className="btn btn-primary btnCount"
                onClick={handleCountResta}
                disabled={count <= 1}
            >
                -
            </Button>
            <span className="countSpan">{count}</span>
            <Button
                className="btn btn-primary btnCount"
                onClick={handleCountSuma}
                disabled={count >= stock}
            >
                +
            </Button>
            <Button onClick={handleAddToCart} className="btn btn-success addItemButton">
                Add to Cart
            </Button>
            <ToastContainer />
        </div>
    );
};

export default ItemCount;