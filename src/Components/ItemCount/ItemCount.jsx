import React, { useState } from "react";
import "./ItemCount.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "react-bootstrap";

const ItemCount = ({ onAdd, stock, countSuma, countResta }) => {
    const [count, setCount] = useState(1);

    const handleCountSuma = () => {
        if (count < stock) {
            setCount(count + 1);
            onAdd(count + 1);
        }
    };

    const handleCountResta = () => {
        if (count > 1) {
            setCount(count - 1);
            onAdd(count - 1);
        }
    };

    const notify = () => toast.success("item added to cart", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

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
            <Button onClick={() => { onAdd(count); notify(); }} className="btn btn-success addItemButton">
                Add to Cart
            </Button>
            <ToastContainer />
        </div>
    );
};

export default ItemCount;