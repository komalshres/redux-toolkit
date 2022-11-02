import React from "react";
import RemoveButton from "../Button";
import "./style.scss";

const CartItem = ({ title, price, img, amount }) => {
  return (
    <div className="cart-container">
      <div className="cart-items">
        <img src={img} alt={title} />
        <h3 className="item">{title}</h3>
        <p className="price">{price}</p>
        <RemoveButton className="remove-btn">Remove</RemoveButton>
      </div>
      <div className="chevron">
        <button className="chevron-btn">↑</button>
        <p className="amount">{amount}</p>
        <button className="chevron-btn">↓</button>
      </div>
    </div>
  );
};

export default CartItem;
