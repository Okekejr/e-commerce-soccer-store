import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";

import CartItems from "../cart-items/CartItems";
import "./cart-dropdown.css";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutLink = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item.id} cartItem={item} />
        ))}
      </div>
      <button onClick={checkoutLink} className="cartBtn">
        GO TO CHECKOUT
      </button>
    </div>
  );
};

export default CartDropDown;
