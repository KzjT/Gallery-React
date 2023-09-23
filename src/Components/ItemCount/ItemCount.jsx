import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./ItemCount.scss"
import { notifyAddProduct, notifyNoStockAvaliable } from "../../helpers/noti-toasty";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";

const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const handleCountSuma = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            notifyNoStockAvaliable();
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
            notifyNoStockAvaliable();
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
            <Button onClick={handleAddToCart} className="btn btn-primary addItemButton">
                Add to Cart
            </Button>
            <ToastContainer />
        </div>
    );
};

export default ItemCount;