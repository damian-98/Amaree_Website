import React from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeImage from "./components/Home_img";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="AppTitle">Beauty Bundles</h1>
      <NavBar />
      <HomeImage />
      <Footer />
    </div>
  );
}
export default App;
