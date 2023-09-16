import { createContext, useState } from "react"

//se inicializa
export const CartContext = createContext([]);


export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([])

const formatter2 = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

    const totalWidget = items.reduce((acc, val) => acc + val.quantity, 0)

    const addItem = ({ product, quantity }) => {

    const alreadyExists = items.some(item => item.id === product.id)

        if(!alreadyExists) setItems(prev => [...prev, {...product, quantity}])
        else{
            const actualizarProductos = items.map (item => {
                if (item.id === product.id)
                return {
            ...item,
        quantity: item.quantity + quantity,
    }
    else return item
            })
            setItems(actualizarProductos)
        }
    }
    

    const removeItem = (id) => {
        const itemsFiltered = items.filter(item => item.id !== id)
        setItems(itemsFiltered)
    }

    const clear = () => setItems([])

    const CartVars= {
        items, 
        addItem, 
        removeItem, 
        clear, 
        totalWidget, 
        formatter2
    }

    return (
        <CartContext.Provider value={CartVars}>
            {children}
        </CartContext.Provider>
    )
}

