import { useState } from "react";
import "./ItemCount.scss";
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
            <Button onClick={() => onAdd(count)} className="btn btn-success addItemButton">
                Add Cart
            </Button>
        </div>
    );
};


export default ItemCount;