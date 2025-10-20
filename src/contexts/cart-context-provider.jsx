import { createContext, useCallback, useState } from "react";
import { addToCartRepo } from '../repositories/cartRepository';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') ?? '[]'));

    const addToCart = (item) => {
        setCart((currentCart) => {
            const result = addToCartRepo(item, currentCart);
            localStorage.setItem('cart', JSON.stringify(result));
            return result;
        });
    };

    const contextValue = {
        cart, setCart, addToCart
    }

    return <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
}