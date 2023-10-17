import { createContext, useState } from "react";
import "./styles/App.css";
import CartPage from "./pages/CartPage";
import MenuPage from "./pages/MenuPage";
// import Cards from './components/Cards';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

export const CartContext = createContext(null);

function App() {
  const cartContext = useState([]);

  return (
    <CartContext.Provider value={cartContext} key={`cartContext`}>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
