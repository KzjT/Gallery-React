import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);
    const [orderCounter] = useState(2000);

    const formatter2 = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR", 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    const totalWidget = items.reduce((acc, val) => acc + val.quantity, 0);

    const addItem = ({ product, quantity }) => {
        const updatedItems = [...items];
        const existingItemIndex = updatedItems.findIndex((item) => item.id === product.id);

        if (existingItemIndex !== -1) {
            updatedItems[existingItemIndex].quantity += quantity;
        } else {
            updatedItems.push({ ...product, quantity });
        }

        setItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems));

        console.log("Item added to cart:", product, "Quantity:", quantity);
    };

    const total = () =>
        items.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.price,
            0
        );

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const countSuma = ({ stock }) => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const countResta = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const removeItem = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems));
    };

    const clear = () => {
        setItems([]);
        localStorage.removeItem("cart");
    };

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setItems(JSON.parse(storedCart));
        }
    }, []);

    const CartVars = {
        items,
        addItem,
        removeItem,
        clear,
        totalWidget,
        total,
        scrollToTop,
        formatter2,
        countSuma,
        countResta,
        orderCounter,
        setItems: setItems,
    };

    return (
        <CartContext.Provider value={CartVars}>
            {children}
        </CartContext.Provider>
    );
};
