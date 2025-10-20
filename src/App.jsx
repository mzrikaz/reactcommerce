import Header from "./components/Header";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react"
import { fetchProducts } from './repositories/productRepository';
import { CartContextProvider } from "./contexts/cart-context-provider";

const App = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts(setProducts);
    setLoading(false);

  }, []);

  return (
    <CartContextProvider>
      <Header />
      <main>
        <Routes>
          <Route index element={<HomePage products={products} loading={loading} />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
    </CartContextProvider>
  );
};

export default App;
