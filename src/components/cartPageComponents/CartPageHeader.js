import React from "react";
import { useNavigate } from "react-router-dom";

function CartPageHeader() {
  const navigate = useNavigate();
  const HandleMenuClick = () => navigate("/");
  return (
    <div className="container d-flex justify-content-between align-items-center">
      <h1 className="logo mt-3">Cart</h1>
      <h2 className="search-filter mt-3" onClick={HandleMenuClick}>
        Menu
      </h2>
    </div>
  );
}

export default CartPageHeader;
