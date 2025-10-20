export const addToCartRepo = (item, cart) => {
    const cartItemIndex = cart.findIndex((cartItem) => cartItem.id == item.id);

    if (cartItemIndex !== -1) {
        if ((cart[cartItemIndex].quantity) < item.product.stock
        ) {
            const updatedCart = [...cart];
            updatedCart[cartItemIndex] = {
                ...updatedCart[cartItemIndex],
                quantity: updatedCart[cartItemIndex].quantity + 1
            };
            return updatedCart;
        } else {
            console.log('quantity limit reached');
            return cart;
        }
    } else {
        if (item.quantity < item.product.stock) {
            console.log('adding new item');
            const newArr = [...cart, item];
            return newArr;
        } else {
            console.log('quantity limit reached');
            return cart;
        }
    }
};