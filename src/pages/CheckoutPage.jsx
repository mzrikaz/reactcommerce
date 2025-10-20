import { useContext } from "react"
import CartItem from "../components/CartItem"
import CartSummaryItem from "../components/CartSummaryItem"
import { CartContext } from "../providers/cart-context-provider"


const CheckoutPage = () => {
    const {cart, calculateSubtotal} = useContext(CartContext)
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
                        <CartSummaryItem title="Subtotal" value={`Rs.${calculateSubtotal}`}  />
                        <CartSummaryItem title="Discount" value="Rs.500" highlight={true}  />
                        <CartSummaryItem title="Delivery Fee" value="Rs.500"  />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CheckoutPage
