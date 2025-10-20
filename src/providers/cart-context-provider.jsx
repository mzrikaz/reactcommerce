import { createContext, useState, useCallback, useMemo } from "react";
import { addToCartRepository, decrementRepo, incrementRepo, deleteItemRepo } from "../repositories/cartRepository"


const defaultCartSchema = {
    items: [],
    subtotal: 0.00,
    discount: 0.00,
    deliveryFee: 0.00,
    total: 0.00
}


export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') ?? JSON.stringify(defaultCartSchema)));


    const addToCart = useCallback((item) => addToCartRepository(item, cart, setCart), [cart]);
    const increment = useCallback((item) => incrementRepo(item, cart, setCart), [cart]);
    const decrement = useCallback((item) => decrementRepo(item, cart, setCart), [cart]);
    const deleteItem = useCallback((item) => deleteItemRepo(item, cart, setCart), [cart]);

    const calculateSubtotal = useMemo(() => {
        console.log('calculate total');
        return cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
    }, [cart]);

    const values = {
        cart,
        setCart,
        addToCart,
        increment,
        decrement,
        deleteItem,
        calculateSubtotal,
    };

    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}