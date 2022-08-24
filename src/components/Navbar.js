import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  // const [isNavExpanded, setIsNavExpanded] = useState(false);

  // let nav = document.getElementById("nav-toggle");
  // if (nav.style.display == "" || nav.style.display == "block")
  //   nav.style.display = "none";
  // else nav.style.display = "block";

  return (
    <header>
      {" "}
      <li>
        <Link to="/" className="nav-logo">
          {" "}
          Beauty Bundles
        </Link>
      </li>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <a className="dropbtn">Menu</a>
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
              <AiOutlineShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
}

export default Navbar;
