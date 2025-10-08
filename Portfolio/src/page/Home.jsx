// import meImg from "../assets/Profile.png";
// import image1 from "../assets/image1.jpg";
// import image2 from "../assets/image2.jpg";
// import image3 from "../assets/image3.jpg";
// import BarAnimation from "../components/baranimation";
import liblog from "../assets/liblog.jpg";
import krabbi from "../assets/Krabbi.png";
import workout from "../assets/workout.jpg";
import moneyging from "../assets/moneyging.png";
import Profile from "../assets/Profile.png";
function Home() {
  return (
    <div>
      <section id="home">
        <div className="container-fluid p-0">
          <div className="center-div d-flex flex-column align-items-center justify-content-center text-center p-5">
            <img
              src={Profile}
              alt="Profile"
              className="rounded-circle mb-3"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                border: "3px solid #ff6200",
              }}
            />
            <div className="desc text-white mb-4">
              Hi, I'm Jai Aaron, a passionate developer specializing in modern,
              responsive websites and mobile apps.
            </div>
            <a
              href="#myproject"
              className="btn btn-orange text-white px-4 py-2"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center min-vh-100">
            <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h1 className="display-4 text-orange fw-bold mb-4">About Me</h1>
              <p className="lead text-muted mb-4">
                I'm Jai Aaron, a dedicated web developer with 5 years of
                experience in crafting user-friendly, responsive websites and
                applications. My expertise spans front-end and back-end
                technologies, with a passion for creating seamless digital
                experiences that combine functionality with stunning design.
                When I'm not coding, you can find me exploring new tech trends
                or contributing to open-source projects.
              </p>
              <a href="#contact" className="btn btn-orange btn-lg px-4 py-2">
                Get in Touch
              </a>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <img
                src={Profile}
                alt="About Me"
                className="img-fluid rounded border border-3 border-orange shadow-lg"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="myproject" className="cards-section py-5">
        <div className="container">
          <div className="row g-4 d-flex align-items-center justify-content-center min-vh-100">
            <h1 className="display-4 text-orange fw-bold text-center">
              My Projects
            </h1>
            {/* Card 1 */}
            <div className="col-lg-6 col-md-6">
              <div className="card h-300 galaxy-bg-card text-center p-4 shadow-lg">
                <img
                  src={liblog}
                  alt="Project 1"
                  className="card-img-top rounded mb-3"
                  style={{
                    objectFit: "scale-down",
                    border: "2px solid #ff6200",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h2 className="text-orange">LibLog</h2>
                  <p className="card-text text-white mb-4">
                    A comprehensive library management system designed to
                    streamline book tracking, member management, and lending
                    processes.
                  </p>
                  <a
                    href="#"
                    className="btn btn-orange text-white mt-auto mx-auto px-4 py-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-lg-6 col-md-6">
              <div className="card h-300 galaxy-bg-card text-center p-4 shadow-lg">
                <img
                  src={moneyging}
                  alt="Project 2"
                  className="card-img-top rounded mb-3"
                  style={{
                    objectFit: "scale-down",
                    border: "2px solid #ff6200",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h2 className="text-orange">Moneyging</h2>
                  <p className="card-text text-white mb-4">
                    An intuitive personal finance app that helps users track
                    expenses, set budgets, and achieve their financial goals
                    with ease.
                  </p>
                  <a
                    href="#"
                    className="btn btn-orange text-white mt-auto mx-auto px-4 py-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-lg-6 col-md-6">
              <div className="card h-300 galaxy-bg-card text-center p-4 shadow-lg">
                <img
                  src={workout}
                  alt="Project 3"
                  className="card-img-top rounded mb-3"
                  style={{
                    objectFit: "scale-down",
                    border: "2px solid #ff6200",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h2 className="text-orange">Workout</h2>
                  <p className="card-text text-white mb-4">
                    A fitness tracking app that allows users to log workouts,
                    monitor progress, and stay motivated with personalized
                    exercise plans.
                  </p>
                  <a
                    href="#"
                    className="btn btn-orange text-white mt-auto mx-auto px-4 py-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-lg-6 col-md-6">
              <div className="card h-300 galaxy-bg-card text-center p-4 shadow-lg">
                <img
                  src={krabbi}
                  alt="Project 4"
                  className="card-img-top rounded mb-3"
                  style={{
                    objectFit: "scale-down",
                    border: "2px solid #ff6200",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h2 className="text-orange">Krabbi</h2>
                  <p className="card-text text-white mb-4">
                    A crab identification app that helps users identify
                    different crab species using images and provides detailed
                    information about each species.
                  </p>
                  <a
                    href="#"
                    className="btn btn-orange text-white mt-auto mx-auto px-4 py-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section py-5 bg-light">
        <div className="container">
          <h2 className="display-4 text-orange fw-bold text-center mb-5">
            My Contact
          </h2>
          <div className="row d-flex align-items-center justify-content-center">
            {/* Contact Details Column */}
            <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h3 className="h4 text-orange mb-3">Contact Details</h3>
              <p className="lead text-muted mb-2">
                <strong>Email:</strong> ggjai@example.com
              </p>
              <p className="lead text-muted mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="lead text-muted mb-2">
                <strong>Address:</strong> 123 Web Street, Tech City, TC 12345
              </p>
              <p className="lead text-muted mb-4">
                <strong>Hours:</strong> Mon-Fri, 9 AM - 5 PM
              </p>
            </div>
            {/* Contact Form Column */}
            <div className="col-12 col-lg-6">
              <form
                // onSubmit={handleSubmit}
                className="p-4 bg-white rounded shadow-sm"
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-orange">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-orange">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-orange">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Your Feedback"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-orange btn-lg px-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="info-section py-5 bg-white">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {/* Personal Info Column */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <h3 className="h4 text-orange mb-3">Jane Doe</h3>
              <p className="text-muted mb-4">
                Passionate web developer creating innovative digital solutions.
                Connect with me on social media for updates and projects.
              </p>
            </div>
            {/* Quick Links Column */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <h3 className="h4 text-orange mb-3">Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Info Column */}
            <div className="col-12 col-md-4">
              <h3 className="h4 text-orange mb-3">Contact Info</h3>
              <p className="text-muted mb-2">Email: ggjai@example.com</p>
              <p className="text-muted mb-2">Phone: (123) 456-7890</p>
              <p className="text-muted mb-4">
                Address: 123 Web Street, Tech City, TC 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
// function Home() {
//   return (
//     <div>
//       <div className="mainContent ">
//         {/* //start of home */}
//         <div className=" mx-auto mr-5 ml-5 mb-0">
//           <BarAnimation />
//           <div className="row g-0 ">
//             <div className="homeImage col-md-5  ">
//               <div className="image-box">
//                 <div className="image-item">
//                   {" "}
//                   <img src={meImg} className="rounded" alt="Card image" />
//                 </div>
//               </div>
//             </div>
//             <div className="homeContent col-md-7 mt-3 mt-md-0">
//               <div className="p-5 homeDetails">
//                 <h1>Hi, I am </h1>
//                 <h1> Jai Gelle J. Aaron</h1>
//                 <h2>
//                   {" "}
//                   <span style={{ "--i": 4 }} data-text="Learner">
//                     Learner
//                   </span>{" "}
//                   <span style={{ "--i": 3 }} data-text="Educator">
//                     Educator
//                   </span>{" "}
//                   <span style={{ "--i": 2 }} data-text="Enthusiast">
//                     Enthusiast
//                   </span>{" "}
//                   <span style={{ "--i": 1 }} data-text="Student">
//                     Student
//                   </span>
//                 </h2>
//                 <h4>Graduate in Bachelor of Science in Computer Science</h4>
//                 <h4>at Bohol Island State University - Clarin Campus</h4>
//                 <div className="btn-sci">
//                   <a href="#" className="btnTalk">
//                     Let's Talk
//                   </a>
//                   <div className="sci">
//                     <a href="#">
//                       <i className="bx bxl-github"></i>
//                     </a>
//                     <a href="#">
//                       <i className="bx bxl-linkedin"></i>
//                     </a>
//                     <a href="#">
//                       <i className="bx bxl-twitter"></i>
//                     </a>
//                     <a href="#">
//                       <i className="bx bxl-youtube"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>{" "}
//           </div>
//         </div>
//         {/* //end of home //start of about me */}
//       </div>
//       <div className="introscreen">
//         <div class="left-pane ">
//           <div className="image-box">
//             <img src={alien} alt="Sample" />
//           </div>
//         </div>
//         <div class="right-pane">
//           <h1>VIEW MY WORK</h1>
//           {/* <p>
//                   I design intuitive digital experiences that help startups connect
//                   with their users.
//                 </p> */}
//         </div>
//       </div>
//       <div className="container mt-5 ">
//         <div className="introscreen krabbibackground border border-5 border-dark rounded p-3">
//           <div class="left-pane">
//             <div className="">
//               <img src={krabbi} alt="Sample" />
//             </div>
//           </div>
//           <div class="right-pane">
//             <h1>Krabbi</h1>
//             <p>A Crab Image Recognition App</p>
//           </div>
//         </div>
//       </div>
//       <div className="container mt-5 ">
//         <div className="introscreen krabbibackground border border-5 border-dark rounded p-3">
//           <div class="left-pane">
//             <div className="workoutimage">
//               <img src={workout} alt="Sample" />
//             </div>
//           </div>
//           <div class="right-pane">
//             <h1>Workout</h1>
//             <p>A Workout Schedule Application</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
