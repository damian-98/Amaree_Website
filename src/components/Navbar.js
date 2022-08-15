import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <nav className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="dropdown">
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
          <Link to="/braids">Braids</Link>
          <Link to="/ponytail">Ponytail</Link>
          <Link to="/curls">Curls</Link>
        </div>
      </li>
      <li>
        <Link to="/images">Images</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/checkout" className="shopping-cart">
          {" "}
          <AiOutlineShoppingCart />
        </Link>
      </li>
    </nav>
  );
}

export default Navbar;
