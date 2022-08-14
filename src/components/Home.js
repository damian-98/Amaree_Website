import React from "react";
import images from "./img/0629445A-D203-4D56-8702-C9641091A0EF.jpeg";

function Home() {
  return (
    <div>
      <h1 className="AppTitle">Beauty Bundles</h1>
      <img
        src={images}
        className="container background"
        alt="mirror selfie"
        width="320"
        height="570"
      ></img>
    </div>
  );
}

export default Home;
