import axios from "axios";

export async function fetchProducts(setProducts) {
  try {
    const response = await axios.get('/api/products');
    setProducts(response.data);
  } catch (e) {
    alert(e.message);
  }
}