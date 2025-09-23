import React from "react";
import alien from "../assets/alien.png";
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
          <h1>Hello World</h1>
          <p>This is the text section beside the image.</p>
        </div>
      </div>
      <div className="introscreen">
        <div class="left-pane ">
          <div className="image-box">
            <img src={alien} alt="Sample" />
          </div>
        </div>
        <div class="right-pane">
          <h1>Hello World</h1>
          <p>This is the text section beside the image.</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
