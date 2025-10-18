export const addToCartRepo = (item, cart, setCart) => {
    const cartItemIndex = cart.findIndex((cartItem) => cartItem.id == item.id);

    if (cartItemIndex !== -1) {
        if ((cart[cartItemIndex].quantity) < item.product.stock
        ) {
            cart[cartItemIndex].quantity += 1;
            setCart([...cart]);
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            console.log('quantity limit reached');
        }
    } else {
        if (item.quantity < item.product.stock) {
            console.log('adding new item');
            const newArr = [...cart, item];
            setCart(newArr);
            localStorage.setItem('cart', JSON.stringify(newArr));
        } else {
            console.log('quantity limit reached');
        }
    }
};