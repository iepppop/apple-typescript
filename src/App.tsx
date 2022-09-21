import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/CartContext";
import Product from "./components/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
