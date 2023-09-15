import { createContext, useState } from "react"

//se inicializa
export const CartContext = createContext([]);


export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([])


    //funcion que acumula los items
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
    

    //funcion removedora por "id"
    const removeItem = (id) => {
        const itemsFiltered = items.filter(item => item.id !== id)
        setItems(itemsFiltered)
    }

    //funcion limpiadora, devuelve un array vacio
    const clear = () => setItems([])


    return (

        <CartContext.Provider value={{ addItem, removeItem, clear, totalWidget, items}}>
            {children}
        </CartContext.Provider>

    )

}

