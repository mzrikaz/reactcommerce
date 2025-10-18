import Header from "./components/Header";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react"
import { addToCartRepo } from './repositories/cartRepository';
import { fetchProducts } from './repositories/productRepository';

const App = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') ?? '[]'));

  useEffect(() => {
    fetchProducts(setProducts);
    setLoading(false);

  }, []);

  const addToCart = (item) => {
    addToCartRepo(item, cart, setCart)
  };

  return (
      <>
      <Header cart={cart} />
      <main>
        <Routes>
          <Route index element={<HomePage addToCart={addToCart} products={products} loading={loading} />} />
          <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        </Routes>
      </main>
      </>
  );
};

export default App;
