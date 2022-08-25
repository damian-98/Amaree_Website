import React from "react";
import image1 from "./img/IMG_2031.jpeg";
import image2 from "./img/IMG_2033.jpeg";
import image3 from "./img/IMG_2034.jpeg";
import "../Imagepage.css";

function Images() {
  return (
    <div className="App">
      <div id="image-wrapper">
        <img
          src={image1}
          id="container"
          alt="mirror selfie"
          width="420"
          height="320"
        ></img>
        <img
          src={image2}
          id="container"
          alt="mirror selfie"
          width="420"
          height="320"
        ></img>
        <img
          src={image3}
          id="container"
          alt="mirror selfie"
          width="420"
          height="320"
        ></img>
      </div>
    </div>
  );
}

export default Images;
