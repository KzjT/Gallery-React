import { useState } from "react";
import "./ItemCount.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "react-bootstrap";

export const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const countSuma = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const countResta = () => {
        if (count > 1) {
            setCount(count - 1);
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
            <button
                className="btn btn-primary btnCount"
                onClick={countResta}
                disabled={count <= 1}
            >
                -
            </button>
            <span className="countSpan">{count}</span>
            <button
                className="btn btn-primary btnCount"
                onClick={countSuma}
                disabled={count >= stock}
            >
                +
            </button>

            <Button onClick={() => { onAdd(count); notify(); }} className="btn btn-success addItemButton">
                Add to Cart
            </Button>
            <ToastContainer />

        </div>
    );
};


export default ItemCount;