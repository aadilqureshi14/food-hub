import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../App";

function Header() {
  const [cart] = useContext(CartContext);
  const navigate = useNavigate();
  const handleCartClick = () => navigate("/cart");
  return (
    <div className="container d-flex justify-content-between align-items-center">
      <h1 className="logo mt-3">FoodHub Restaurant</h1>
      <h2 className="search-filter mt-3" onClick={handleCartClick}>
        Cart: {cart.length}
      </h2>
    </div>
  );
}

export default Header;
