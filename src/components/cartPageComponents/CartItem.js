import React from "react";
// import Card from "react-bootstrap/card";
// import Button from "react-bootstrap/Button";

function CartItem({ item, onQtyIncrease, onQtyDecrease, onRemove }) {
  return (
    <div className="cart_box" key={item.id}>
      <div className="cart_img">
        <img src={item.imgData} />
        <p>{item.itemName}</p>
      </div>
      <div>
        <button onClick={onQtyDecrease}> - </button>
        <button>{item.quantity}</button>
        <button onClick={onQtyIncrease}> + </button>
      </div>
      <div>
        <span>₹{item.amount}</span>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
