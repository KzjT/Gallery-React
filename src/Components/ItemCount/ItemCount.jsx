import React, { useState } from "react";
import "./ItemCount.scss";
import { ToastContainer} from 'react-toastify';
import { notifyAddProduct } from "../../helpers/noti-toasty";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "react-bootstrap";

const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);
    const notify = notifyAddProduct;
    const handleCountSuma = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleCountResta = () => {
        if (count > 1) {
            setCount(count - 1);
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
            <Button onClick={() => { onAdd(count); notify(); }} className="btn btn-success addItemButton">
                Add to Cart
            </Button>
            <ToastContainer />
        </div>
    );
};

export default ItemCount;
