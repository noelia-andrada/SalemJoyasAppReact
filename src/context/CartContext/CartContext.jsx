import { useState, createContext, useContext } from "react";

const CartContext = createContext([])
export const useCartContext = () =>  useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {
        const idx = cartList.findIndex(prod => prod.id === product.id)
        
        if (idx === -1) {
            setCartList([...cartList, product])
        } else {
            cartList[idx].cant +=  product.cant
            setCartList([...cartList]) 
        }  
    }

    const totalPrice = () => cartList.reduce((contador, producto) => contador += (producto.precio*producto.cant), 0)

    const totalQuantity = () => cartList.reduce((contador, producto) => contador+=producto.cant, 0)

    const emptyCart = () => {
        setCartList([])
    }

    const deleteOneItem = (id) =>  {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    return (
        <CartContext.Provider value= {
            {cartList,
            addToCart,
            emptyCart,
            totalPrice,
            totalQuantity,
            deleteOneItem}
        }>
            {children}
        </CartContext.Provider>
    )
}