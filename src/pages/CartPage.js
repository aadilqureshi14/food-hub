import React, { useContext } from "react";
import CartPageHeader from "../components/cartPageComponents/CartPageHeader";
import { CartContext } from "../App";
import "../styles/cart.css";
import CartItem from "../components/cartPageComponents/CartItem";

function CartPage() {
  // Get current cart data from Cart context
  const [cart, setCart] = useContext(CartContext);

  const handleItemQuantityChange = (item, changeInQuantity) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.itemName === item.itemName) ind = index;
    });
    const copyOfCartForUpdate = cart;
    copyOfCartForUpdate[ind].quantity += changeInQuantity;

    // If quantity becomes less than or equal to 0, set it to 1 by default
    if (copyOfCartForUpdate[ind].quantity <= 0)
      copyOfCartForUpdate[ind].quantity = 1;

    // Update the final item amount after changing the quantity
    copyOfCartForUpdate[ind].amount =
      copyOfCartForUpdate[ind].quantity * copyOfCartForUpdate[ind].itemPrice;

    // finally, update the cart with updated quantity and final amount of the item
    setCart([...copyOfCartForUpdate]);
  };

  const handleItemRemove = (itemName) => {
    const cartAfterRemovingTheItem = cart.filter(
      (item) => item.itemName !== itemName
    );
    setCart(cartAfterRemovingTheItem);
  };

  // Calculate the total amount of the cart
  const totalAmount = cart.reduce((prev, curr) => prev + curr.amount, 0);

  return (
    <>
      <CartPageHeader />
      <article>
        {cart?.map((item, index) => (
          <CartItem
            item={item}
            onQtyDecrease={() => handleItemQuantityChange(item, -1)}
            onQtyIncrease={() => handleItemQuantityChange(item, +1)}
            onRemove={() => handleItemRemove(item.itemName)}
            key={`cart-item-${index}`}
          />
        ))}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>₹{totalAmount}</span>
        </div>
      </article>
    </>
  );
}

export default CartPage;
