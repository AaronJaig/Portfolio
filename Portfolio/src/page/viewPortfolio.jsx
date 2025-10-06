import React from "react";
import alien from "../assets/alien.png";
import krabbi from "../assets/krabbi.png";
import workout from "../assets/workout.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";

function ViewPortfolio() {
  return (
    <div class="">
      <div className="introscreen">
        <div class="left-pane ">
          <div className="image-box">
            <img src={alien} alt="Sample" />
          </div>
        </div>
        <div class="right-pane">
          <h1>VIEW MY WORK</h1>
          {/* <p>
            I design intuitive digital experiences that help startups connect
            with their users.
          </p> */}
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="introscreen krabbibackground border border-5 border-dark rounded p-3">
          <div class="left-pane">
            <div className="">
              <img src={krabbi} alt="Sample" />
            </div>
          </div>
          <div class="right-pane">
            <h1>Krabbi</h1>
            <p>A Crab Image Recognition App</p>
          </div>
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="introscreen krabbibackground border border-5 border-dark rounded p-3">
          <div class="left-pane">
            <div className="workoutimage">
              <img src={workout} alt="Sample" />
            </div>
          </div>
          <div class="right-pane">
            <h1>Workout</h1>
            <p>A Workout Schedule Application</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPortfolio;
