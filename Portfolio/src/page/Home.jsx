import meImg from "../assets/Profile.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import BarAnimation from "../components/baranimation";

function Home() {
  return (
    <div>
      <div className="mainContent ">
        {/* //start of home */}
        <div className=" mx-auto mr-5 ml-5 mb-0">
          <BarAnimation />
          <div className="row g-0 ">
            <div className="homeImage col-md-5  ">
              <div className="image-box">
                <div className="image-item">
                  {" "}
                  <img src={meImg} className="rounded" alt="Card image" />
                </div>
              </div>
            </div>
            <div className="homeContent col-md-7 mt-3 mt-md-0">
              <div className="p-5 homeDetails">
                <h1>Hi, I am </h1>
                <h1> Jai Gelle J. Aaron</h1>
                <h2>
                  {" "}
                  <span style={{ "--i": 4 }} data-text="Learner">
                    Learner
                  </span>{" "}
                  <span style={{ "--i": 3 }} data-text="Educator">
                    Educator
                  </span>{" "}
                  <span style={{ "--i": 2 }} data-text="Enthusiast">
                    Enthusiast
                  </span>{" "}
                  <span style={{ "--i": 1 }} data-text="Student">
                    Student
                  </span>
                </h2>
                <h4>Graduate in Bachelor of Science in Computer Science</h4>
                <h4>at Bohol Island State University - Clarin Campus</h4>
                <div className="btn-sci">
                  <a href="#" className="btnTalk">
                    Let's Talk
                  </a>
                  <div className="sci">
                    <a href="#">
                      <i className="bx bxl-github"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        {/* //end of home //start of about me */}
      </div>
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

export default Home;
