import meImg from "../assets/Profile.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import BarAnimation from "../components/baranimation";

function Home() {
  return (
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
  );
}

export default Home;
