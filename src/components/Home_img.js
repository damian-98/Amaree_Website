import React from "react";
import images from "./img/0629445A-D203-4D56-8702-C9641091A0EF.jpeg";

function HomeImage() {
  return (
    <div>
      {" "}
      <img
        src={images}
        className="container background"
        alt="mirror selfie"
        width="350"
        height="650"
      ></img>
    </div>
  );
}
export default HomeImage;
