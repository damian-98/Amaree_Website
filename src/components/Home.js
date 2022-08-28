import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const [index, setIndex] = useState(7);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div>
          <div className="home"></div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div>
          <div className="home"></div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}
export default Home;

// import React from "react";
// // import images from "./img/0629445A-D203-4D56-8702-C9641091A0EF.jpeg";

// function Home() {
//   return (
//     <div>
//       <div className="home"></div>
//     </div>
//   );
// }

// export default Home;
