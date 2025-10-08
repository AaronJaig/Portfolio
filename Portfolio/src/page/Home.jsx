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
        <div class="container-fluid p-0">
          <div class="center-div d-flex flex-column align-items-center justify-content-center text-center p-5">
            <img
              // src="./assets/images/Profile.png"
              src={Profile}
              alt="Profile"
              class="rounded-circle mb-3"
              style="
              width: 300px;
              height: 300px;
              object-fit: cover;
              border: 3px solid #ff6200;
            "
            />
            <div class="desc text-white mb-4">
              Hi, I'm Jai Aaron , a passionate developer specializing in modern,
              responsive websites and mobile apps.
            </div>
            <a href="#myproject" class="btn btn-orange text-white px-4 py-2">
              View My Work
            </a>
          </div>
        </div>
      </section>
      <section id="about" class="about-section py-5">
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center min-vh-100">
            <div class="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h1 class="display-4 text-orange fw-bold mb-4">About Me</h1>
              <p class="lead text-muted mb-4">
                I'm Jai Aaron, a dedicated web developer with 5 years of
                experience in crafting user-friendly, responsive websites and
                applications. My expertise spans front-end and back-end
                technologies, with a passion for creating seamless digital
                experiences that combine functionality with stunning design.
                When I'm not coding, you can find me exploring new tech trends
                or contributing to open-source projects.
              </p>
              <a href="#contact" class="btn btn-orange btn-lg px-4 py-2">
                Get in Touch
              </a>
            </div>
            <div class="col-12 col-lg-6 text-center">
              <img
                // src="./assets/images/Profile.png"
                src={Profile}
                alt="About Me"
                class="img-fluid rounded border border-3 border-orange shadow-lg"
                style="max-height: 400px; object-fit: cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="myproject" class="cards-section py-5">
        <div class="container">
          <div class="row g-4 d-flex align-items-center justify-content-center min-vh-100">
            <h1 class="display-4 text-orange fw-bold text-center">
              My Projects
            </h1>

            {/* <!-- Card 1 --> */}
            <div class="col-lg-6 col-md-6">
              <div class="card h-300 galaxy-bg-card text-center p-4 shadow-lg">
                <img
                  // src="./assets/images/liblog.jpg"
                  src={liblog}
                  alt="Project 1"
                  class="card-img-top rounded mb-3"
                  style="object-fit: scale-down; border: 2px solid #ff6200"
                />
                <div class="card-body d-flex flex-column">
                  <h2 class="text-orange">LibLog</h2>
                  <p class="card-text text-white mb-4">
                    A comprehensive library management system designed to
                    streamline book tracking, member management, and lending
                    processes.
                  </p>
                  <a
                    href="#"
                    class="btn btn-orange text-white mt-auto mx-auto px-4 py-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div class="col-lg-6 col-md-6">
              <div class="card h-300 galaxy-bg-card text-center p-4 shadow-lg">
                <img
                  // src="./assets/images/moneyging.png"
                  src={moneyging}
                  alt="Project 2"
                  class="card-img-top rounded mb-3"
                  style="object-fit: scale-down; border: 2px solid #ff6200"
                />
                <div class="card-body d-flex flex-column">
                  <h2 class="text-orange">Moneyging</h2>

                  <p class="card-text text-white mb-4">
                    An intuitive personal finance app that helps users track
                    expenses, set budgets, and achieve their financial goals
                    with ease.
                  </p>
                  <a
                    href="#"
                    class="btn btn-orange text-white mt-auto mx-auto px-4 py-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div class="col-lg-6 col-md-6">
              <div class="card h-300 galaxy-bg-card text-center p-4 shadow-lg">
                <img
                  // src="./assets/images/workout.jpg"
                  src={workout}
                  alt="Project 2"
                  class="card-img-top rounded mb-3"
                  style="object-fit: scale-down; border: 2px solid #ff6200"
                />
                <div class="card-body d-flex flex-column">
                  <h2 class="text-orange">Workout</h2>

                  <p class="card-text text-white mb-4">
                    A fitness tracking app that allows users to log workouts,
                    monitor progress, and stay motivated with personalized
                    exercise plans.
                  </p>
                  <a
                    href="#"
                    class="btn btn-orange text-white mt-auto mx-auto px-4 py-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Card 4 --> */}
            <div class="col-lg-6 col-md-6">
              <div class="card h-300 galaxy-bg-card text-center p-4 shadow-lg">
                <img
                  // src="./assets/images/Krabbi.png"
                  src={krabbi}
                  alt="Project 2"
                  class="card-img-top rounded mb-3"
                  style="object-fit: scale-down; border: 2px solid #ff6200"
                />
                <div class="card-body d-flex flex-column">
                  <h2 class="text-orange">Krabbi</h2>

                  <p class="card-text text-white mb-4">
                    A crab identification app that helps users identify
                    different crab species using images and provides detailed
                    information about each species.
                  </p>
                  <a
                    href="#"
                    class="btn btn-orange text-white mt-auto mx-auto px-4 py-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="contact-section py-5 bg-light">
        <div class="container">
          <h2 class="display-4 text-orange fw-bold text-center mb-5">
            My Contact
          </h2>
          <div class="row d-flex align-items-center justify-content-center">
            {/* <!-- Contact Details Column --> */}
            <div class="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h3 class="h4 text-orange mb-3">Contact Details</h3>
              <p class="lead text-muted mb-2">
                <strong>Email:</strong> ggjai@example.com
              </p>
              <p class="lead text-muted mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p class="lead text-muted mb-2">
                <strong>Address:</strong> 123 Web Street, Tech City, TC 12345
              </p>
              <p class="lead text-muted mb-4">
                <strong>Hours:</strong> Mon-Fri, 9 AM - 5 PM
              </p>
            </div>
            {/* <!-- Contact Form Column --> */}
            <div class="col-12 col-lg-6">
              <form action="#" class="p-4 bg-white rounded shadow-sm">
                <div class="mb-3">
                  <label for="name" class="form-label text-orange">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label text-orange">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label text-orange">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="4"
                    placeholder="Your Feedback"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-orange btn-lg px-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Info, Links, and Contact Section --> */}
      <section class="info-section py-5 bg-white">
        <div class="container">
          <div class="row d-flex justify-content-center">
            {/* <!-- Personal Info Column --> */}
            <div class="col-12 col-md-4 mb-4 mb-md-0">
              <h3 class="h4 text-orange mb-3">Jane Doe</h3>
              <p class="text-muted mb-4">
                Passionate web developer creating innovative digital solutions.
                Connect with me on social media for updates and projects.
              </p>
            </div>
            {/* <!-- Quick Links Column --> */}
            <div class="col-12 col-md-4 mb-4 mb-md-0">
              <h3 class="h4 text-orange mb-3">Quick Links</h3>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-muted text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="text-muted text-decoration-none">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" class="text-muted text-decoration-none">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" class="text-muted text-decoration-none">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" class="text-muted text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Contact Info Column --> */}
            <div class="col-12 col-md-4">
              <h3 class="h4 text-orange mb-3">Contact Info</h3>
              <p class="text-muted mb-2">Email: ggjai@example.com</p>
              <p class="text-muted mb-2">Phone: (123) 456-7890</p>
              <p class="text-muted mb-4">
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
