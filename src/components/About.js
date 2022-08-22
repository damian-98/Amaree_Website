import React from "react";
import Gif from "./img/IMG_0723.gif";

function About() {
  return (
    <div>
      <div className="about-text-section">
        <h1>About</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>{" "}
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>{" "}
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>{" "}
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>{" "}
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>{" "}
      </div>
      <div className="about-picture">
        <img src={Gif} alt="Posing Pic" width="620" height="770"></img>
      </div>
    </div>
  );
}

export default About;
