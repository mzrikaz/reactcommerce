import Header from "./components/Header";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"

async function fetchProducts(setProducts) {
  try {
    const response = await axios.get('/api/products');
    setProducts(response.data);
  } catch (e) {
    alert(e.message);
  }
}


const App = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) == null ? [] : JSON.parse(localStorage.getItem('cart')));

  const addToCart = (item) => {
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

  useEffect(() => {
  fetchProducts(setProducts);
  setLoading(false);

  }, []);

  return (
    <Router>
      <Header cart={cart} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} products={products} loading={loading} />} />
          <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
