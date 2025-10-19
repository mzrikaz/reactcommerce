import Header from "./components/Header";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"
import { addToCartRepository, decrementRepo, incrementRepo, deleteItemRepo } from "./repositories/cartRepository"

async function fetchProducts(setProducts) {
  try {
    const response = await axios.get('/api/products');
    setProducts(response.data);
  } catch (e) {
    alert(e.message);
  }
}

const defaultCartSchema = {
  items: [],
  subtotal: 0.00,
  discount: 0.00,
  deliveryFee: 0.00,
  total: 0.00
}


const App = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') ?? JSON.stringify(defaultCartSchema)));

  const addToCart = (item) => addToCartRepository(item, cart, setCart); 
  const increment = (item) => incrementRepo(item, cart, setCart); 
  const decrement = (item) => decrementRepo(item, cart, setCart); 
  const deleteItem = (item) => deleteItemRepo(item, cart, setCart);


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
          <Route path="/checkout" element={<CheckoutPage cart={cart} increment={increment} decrement={decrement} deleteItem={deleteItem} />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
