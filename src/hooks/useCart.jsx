import { useContext, useMemo } from 'react'
import { CartContext } from '../providers/cart-context-provider';

export const useCart = () => {

    const {cart} = useContext(CartContext);

    const calculateSubtotal = useMemo(() => {
        console.log('calculate total');
        return cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
    }, [cart]);

    return {
        calculateSubtotal
    }
}