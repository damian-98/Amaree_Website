import React from "react";
import images from "./img/0629445A-D203-4D56-8702-C9641091A0EF.jpeg";

function Home() {
  return (
    <div>
      <img
        src={images}
        className="home-container "
        alt="mirror selfie"
        width="320"
        height="570"
      ></img>
    </div>
  );
}

export default Home;
