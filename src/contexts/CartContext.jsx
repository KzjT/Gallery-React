import { createContext, useState } from "react";
export const CartContext = createContext()
//
export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [orderCounter, setOrderCounter] = useState(2000);
    const formatter2 = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    const totalWidget = items.reduce((acc, val) => acc + val.quantity, 0);

    const addItem = ({ product, quantity }) => {
        const alreadyExists = items.some((item) => item.id === product.id);

        if (!alreadyExists) {
            setItems((prev) => [...prev, { ...product, quantity }]);
        } else {
            const actualizarProductos = items.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity,
                    };
                } else {
                    return item;
                }
            });
            setItems(actualizarProductos);
        }
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
            behavior: "smooth"
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
        const itemsFiltered = items.filter((item) => item.id !== id);
        setItems(itemsFiltered);
    };

    const clear = () => setItems([]);

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
    };

    return (
        <CartContext.Provider value={CartVars}>
            {children}
        </CartContext.Provider>
    );
};
