import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Navbar.css";

function Navigationbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
      <Navbar.Brand href="/" id="nav-logo">
        Beauty Bundles
      </Navbar.Brand>
      <Navbar.Toggle id="nav-toggle" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" id="nav">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Menu" id="nav-menu">
            <NavDropdown.Item href="/braids" id="nav-dropdown">
              Braids
            </NavDropdown.Item>
            <NavDropdown.Item href="/ponytail" id="nav-dropdown">
              Ponytail
            </NavDropdown.Item>
            <NavDropdown.Item href="/curls" id="nav-dropdown">
              Curls
            </NavDropdown.Item>
          </NavDropdown>
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
