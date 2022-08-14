import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        {" "}
        <Navbar />
        <Footer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
