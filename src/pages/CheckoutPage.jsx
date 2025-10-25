import { useContext, useEffect, useState } from "react"
import CartItem from "../components/CartItem"
import CartSummaryItem from "../components/CartSummaryItem"
import { CartContext } from "../providers/cart-context-provider"
import { useCart } from "../hooks/useCart"
import axios from "axios"
import formatPrice from "../utils/formatPrice"
import toastr from "toastr"

async function fetchDeliveryMethods(setDeliveryMethods, setSelectedDeliveryMethod) {
    try {
        const res = await axios.get('/api/delivery-methods');
        if (res.data['status'] === 'success') {
            setDeliveryMethods(res.data.data);
            if (res.data.data.length > 0) {
                setSelectedDeliveryMethod(res.data.data[0].id);
            }
        } 

    } catch (error) {
        toastr.error(error.message);
    }
}


const CheckoutPage = () => {

    const [deliveryMethods, setDeliveryMethods] = useState([]);
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('');
    const {cart} = useContext(CartContext)
    const {calculateSubtotal} = useCart();

    useEffect(() => {
        fetchDeliveryMethods(setDeliveryMethods, setSelectedDeliveryMethod)
    }, []);

    return (
        <>
            <title>Checkout</title>
            <section className="w-7xl mx-auto my-8">
                <h2 className="text-3xl font-bold mb-4">Checkout</h2>
                <div className={`grid grid-cols-10 gap-x-3`}>
                    <div className="col-span-6 border border-gray-200 rounded-2xl p-4 flex flex-col gap-y-3">
                        {
                            cart.items.length === 0 ? <p>No Items added to cart</p> :
                                cart.items.map((item, index) => <CartItem key={item.id} item={item} isFirstItem={index === 0} />)
                        }
                    </div>
                    <div className="col-span-4 border border-gray-200 rounded-2xl p-4 flex flex-col gap-y-3">
                        <h3 className="font-bold">Order Summary</h3>
                        {
                            deliveryMethods.map((method) => <div key={method.id}><input type="radio" name="delivery_method" id="delivery_method" onChange={() => setSelectedDeliveryMethod(method.id)} checked={selectedDeliveryMethod === method.id ? true : false} /> {method.name} - {formatPrice(method.price)}</div>)
                        }
                        <CartSummaryItem title="Subtotal" value={`Rs.${calculateSubtotal}`}  />
                        <CartSummaryItem title="Discount" value="Rs.500" highlight={true}  />
                        <CartSummaryItem title="Delivery Fee" value={selectedDeliveryMethod != '' ? formatPrice(deliveryMethods.find((method) => method.id === selectedDeliveryMethod).price) : 'Rs.0.00'}  />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CheckoutPage
