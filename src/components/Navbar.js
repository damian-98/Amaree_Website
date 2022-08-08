import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { Link } from "react-router-dom";

function navBar() {
  return (
    <nav className="nav">
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/menu">Menu</a>
      </li>
      <li>
        <a href="/images">Images</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/checkout" className="shopping-cart">
          {" "}
          <AiOutlineShoppingCart />
        </a>
      </li>
    </nav>
  );
}

export default navBar;
