import { useContext, useMemo } from 'react';
import { CartContext } from '../contexts/cart-context-provider';

export const useCart = () => {
    const context = useContext(CartContext);
    
    if (!context) {
        throw new Error('useCart must be used within a CartContextProvider');
    }

    const { cart, addToCart, setCart } = context;

    const cartQuantity = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    }, [cart]);

    const cartTotal = useMemo(() => {
        return cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    }, [cart]);

    const isInCart = useMemo(() => {
        return (productId) => cart.some(item => item.id === productId);
    }, [cart]);

    const getQuantity = useMemo(() => {
        return (productId) => {
            const item = cart.find(item => item.id === productId);
            return item ? item.quantity : 0;
        };
    }, [cart]);

    return {
        cart,
        addToCart,
        setCart,
        cartQuantity,
        cartTotal,
        isInCart,
        getQuantity
    };
};