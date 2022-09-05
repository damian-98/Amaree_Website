import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "../Navbar.css";

function Navigationbar() {
  return (
    <Navbar collapseOnSelect expand="xl" bg="light" fixed="top">
      <Navbar.Brand href="/" id="nav-logo">
        Beauty Bundles
      </Navbar.Brand>
      <Navbar.Toggle id="navbar-toggler collapsed">
        <span className="toggler-icon top-bar"></span>
        <span className="toggler-icon middle-bar"></span>
        <span className="toggler-icon bottom-bar"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" id="nav">
          <Nav.Link href="/">Home</Nav.Link>
          {/* <NavDropdown title="Menu" className="dropbtn"> */}
          <div className="dropdown">
            <Nav.Link>Menu</Nav.Link>
            <div className="dropdown-content">
              <a href="/braids">Braids</a>
              <a href="/ponytail">Ponytail</a>
              <a href="/curls">Curls</a>
            </div>
          </div>
          {/* </NavDropdown> */}
          <Nav.Link href="/images">Images</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/checkout" id="shopping-cart">
            <AiOutlineShoppingCart />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;
