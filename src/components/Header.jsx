import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Header = () => {
    const { cartQuantity } = useCart();
    return (
        <header className="bg-black text-white p-4">
            <div className="w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">ReactCommerce</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><a href="#" className="hover:underline">Products</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                        <li><Link to="checkout" className=" bg-white rounded-sm text-black p-2">Checkout ({cartQuantity})</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header
