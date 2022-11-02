import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import RemoveButton from "../Button";
import CartItem from "../CartItem/CartItem";

import "./style.scss";

const Cart = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(clearCart);

  if (!amount) {
    return (
      <section className="cart">
        <header>
          <h2>Your Cart</h2>
          <h4>Cart is empty</h4>
        </header>
      </section>
    );
  }
  return (
    <div className="cart">
      <header>
        <h2>Your Cart</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
      {amount ? (
        <RemoveButton onClick={() => dispatch(clearCart())}>
          Clear Cart
        </RemoveButton>
      ) : (
        " "
      )}
    </div>
  );
};

export default Cart;
