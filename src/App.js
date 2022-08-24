import React from "react";
import Navigates from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Braids from "./components/Braids";
import Ponytail from "./components/Ponytail";
import Curls from "./components/Curls";
import Images from "./components/Images";
import Contact from "./components/Contact";
import About from "./components/About";
import Checkout from "./components/Checkout";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        {" "}
        <Navigates />
        <Footer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/braids" element={<Braids />} />
          <Route exact path="/ponytail" element={<Ponytail />} />
          <Route exact path="/curls" element={<Curls />} />
          <Route exact path="images" element={<Images />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
