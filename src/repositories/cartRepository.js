export const addToCartRepository = (item, cart, setCart) => {
    const cartItemIndex = cart.items.findIndex((cartItem) => cartItem.id == item.id);

    if (cartItemIndex !== -1) {
        incrementRepo(item, cart, setCart, cartItemIndex)
    } else {
        if (item.quantity < item.product.stock) {
            console.log('adding new item');
            const updatedCart = {
                ...cart,
                items: [...cart.items, item],
            };
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
            console.log('quantity limit reached');
        }
    }
};

export const incrementRepo = (item, cart, setCart, index) => {
    const cartItemIndex = index ?? cart.items.findIndex((cartItem) => cartItem.id == item.id);

    if ((cart.items[cartItemIndex].quantity) < item.product.stock
    ) {
        cart.items[cartItemIndex].quantity += 1;
        const updatedCart = {...cart};
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
        console.log('quantity limit reached');
    }
}

export const decrementRepo = (item, cart, setCart, index) => {
    const cartItemIndex = index ?? cart.items.findIndex((cartItem) => cartItem.id == item.id);

    if ((cart.items[cartItemIndex].quantity) > 1
    ) {
        cart.items[cartItemIndex].quantity -= 1;
        const updatedCart = {...cart};
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
        console.log("you can't reduce below zero");
    }
}

export const deleteItemRepo = (item, cart, setCart, index) => {
    const cartItemIndex = index ?? cart.items.findIndex((cartItem) => cartItem.id == item.id);

    if (cartItemIndex != -1) {
        cart.items.splice(cartItemIndex, 1);
        const newCart = {
            ...cart,
        }
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }
}