import React from "react";
import alien from "../assets/alien.png";
import krabbi from "../assets/krabbi.png";
// import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio() {
  return (
    <div class="">
      <div className="introscreen">
        <div class="left-pane ">
          <div className="image-box">
            <img src={alien} alt="Sample" />
          </div>
        </div>
        <div class="right-pane">
          <h1>View my Work</h1>
          <p>
            I design intuitive digital experiences that help startups connect
            with their users.
          </p>
        </div>
      </div>
      <div className="introscreen">
        <div class="left-pane ">
          <div className="image-bo">
            <img src={krabbi} alt="Sample" />
          </div>
        </div>
        <div class="right-pane">
          <h1>Krabbi</h1>
          <p>A Crab Image Recognition App</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
