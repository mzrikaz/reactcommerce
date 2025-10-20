import { memo, useCallback, useContext } from "react";
import RatingBar from "./RatingBar";
import { CartContext } from "../providers/cart-context-provider";

const ProductCard = ({ product, addToCart }) => {
    const { id, name, price, image, rating } = product;
            console.log('re render');


    const addToCartHandler = useCallback(() => addToCart({ id, quantity: 1, product }), [product])

    return (
        <div className="border p-4 rounded">
            <img src={image} alt="Product 1" className="mb-2" />
            <div className="flex justify-between">
                <h3 className="font-bold">{name}</h3>
                <RatingBar rating={rating} />
            </div>
            <p className="text-gray-700">Rs. {price}</p>
            <button onClick={addToCartHandler} className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Add to Cart
            </button>
        </div>
    )
}

export default memo(ProductCard)
