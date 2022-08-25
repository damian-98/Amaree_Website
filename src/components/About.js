import React from "react";
import Gif from "./img/IMG_0723.gif";
import "../Aboutpage.css";

function About() {
  return (
    <div className="App">
      <div id="about-text-section">
        <p>
          Some text about who we are and what we do. Resize the browser window
          to see that this page is responsive by the way. Resize the browser
          window to see that this page is responsive by the way. Resize the
          browser window to see that this page is responsive by the way. Resize
          the browser window to see that this page is responsive by the way.
          Resize the browser window to see that this page is responsive by the
          way. Resize the browser window to see that this page is responsive by
          the way. Resize the browser window to see that this page is responsive
          by the way. Resize the browser window to see that this page is
          responsive by the way. Resize the browser window to see that this page
          is responsive by the way.
        </p>{" "}
      </div>
      <div id="about-picture">
        <img src={Gif} alt="Posing Pic"></img>
      </div>
    </div>
  );
}

export default About;
