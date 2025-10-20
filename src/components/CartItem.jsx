import { useContext } from "react"
import { CartContext } from "../providers/cart-context-provider"

const CartItem = ({ item, isFirstItem}) => {
    const {increment, decrement, deleteItem} = useContext(CartContext)
    return (
        <div className={`grid grid-cols-6 py-3 ${!isFirstItem && 'border-t-2 border-gray-100'}`}>
            <div className="bg-gray-300 h-24 w-24 rounded-xl border-gray-300 col-span-1">
                <img src={item.product.image} className="h-24 w-24 rounded-xl" />
            </div>
            <div className="col-span-4">
                <h2 className="font-bold">{item.product.name}</h2>
                <p>Rs. {item.quantity * item.product.price}</p>
            </div>
            <div className="col-span-1 flex flex-col justify-between">
                <button className="bg-red-500 p-2" onClick={() => deleteItem(item)}>Delete</button>
                <div className="bg-gray-300 rounded-full flex justify-center gap-x-4">
                    <button className=" text-lg" onClick={() => decrement(item) }>-</button>
                    <span className="block">{item.quantity}</span>
                    <button className="text-lg" onClick={() => increment(item) }>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
