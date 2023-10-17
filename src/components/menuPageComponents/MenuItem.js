import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../App";

const MenuItem = ({ data }) => {
  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = (item) => {
    const isItemFound = cart.find(
      (cartItem) => cartItem.itemName === item.itemName
    );
    // return by doing nothing if item is already present in the cart
    if (isItemFound) return;
    // if item is not present in the cart, add the item to the cart
    setCart((prev) => {
      return [...prev, { ...item, quantity: 1, amount: item.itemPrice }];
    });
  };

  return (
    <>
      <Card className="hove mb-4" style={{ width: "23rem", border: "none" }}>
        <Card.Img variant="top" className="cd" src={data.imgData} />

        <div className="card-body">
          <div className="upper-data d-flex justify-content-between align-items-center">
            <h4 className="mt-2">{data.itemName} </h4>
            <span>{data.rating}&nbsp;★</span>
          </div>
          <div className="lower-data d-flex justify-content-between">
            <h5>{data.itemType}</h5>
            <span>₹{data.itemPrice}</span>
          </div>
          {/* Add to cart button */}
          <Button
            className="cart-btn"
            variant="success"
            onClick={() => handleAddToCart(data)}
          >
            Add to Cart
          </Button>{" "}
        </div>
      </Card>
    </>
  );
};

export default MenuItem;
