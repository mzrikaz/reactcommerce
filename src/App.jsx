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


  useEffect(() => {
    fetchProducts(setProducts);
    setLoading(false);

  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage products={products} loading={loading} />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
