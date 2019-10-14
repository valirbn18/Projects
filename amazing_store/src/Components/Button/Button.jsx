import React from "react";
import "./Button.css";
const Button = () => {
  return (
    <button className="cart-button">
      <i className="fas fa-cart-plus cart-icon" />
      <span>MY CART</span>
      <div className="count"> 12 </div>
    </button>
  );
};
export default Button;
