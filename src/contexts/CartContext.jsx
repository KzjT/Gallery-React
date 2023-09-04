import { createContext, useState } from "react"

export const CartContext = createContext([]);


export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([])

    console.log(items)

    const addItem = ({product, quantity}) => setItems(prev => [...prev, {...product,quantity}])

    const removeItem = (id) => {
        const itemsFiltered = items.filter(item => item.id !== id)
        setItems(itemsFiltered)
    }

    const clear = () => setItems([])


    return (

        <CartContext.Provider value={{ addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}