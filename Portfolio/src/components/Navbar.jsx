import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("id"));
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div className="container">
          <a className="navbar-brand text-orange fw-bold" href="#">
            MyPortfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${
                    activeSection === "home" ? "active" : ""
                  }`}
                  to="home"
                  smooth={true}
                  duration={300}
                  onClick={() => setActiveSection("home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${
                    activeSection === "about" ? "active" : ""
                  }`}
                  to="about"
                  smooth={true}
                  duration={300}
                  onClick={() => setActiveSection("about")}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${
                    activeSection === "myproject" ? "active" : ""
                  }`}
                  to="myproject"
                  smooth={true}
                  duration={300}
                  onClick={() => setActiveSection("myproject")}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white ${
                    activeSection === "contact" ? "active" : ""
                  }`}
                  to="contact"
                  smooth={true}
                  duration={300}
                  onClick={() => setActiveSection("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
// function Navbar() {
//   const [active, setActive] = useState("active");
//   return (
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div class="container-fluid">
//         <a class="logo navbar-brand" href="#home">
//           Portfolio
//         </a>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNav">
//           <ul class="navbar-nav ms-auto">
//             <li class="nav-item">
//               <a
//                 class={`homeBtn nav-link${
//                   window.location.pathname === "/" ? " active" : ""
//                 }`}
//                 aria-current="page"
//                 href={"/"}
//               >
//                 Home
//               </a>
//             </li>
//             <li class="nav-item">
//               <a
//                 class={`portfolioBtn nav-link${
//                   window.location.pathname === "/portfolio" ? " active" : ""
//                 }`}
//                 href={"/portfolio"}
//               >
//                 Portfolio
//               </a>
//             </li>

//             <li class="nav-item">
//               <a
//                 class={`portfolioBtn nav-link${
//                   window.location.pathname === "/contact" ? " active" : ""
//                 }`}
//                 href={"/contact"}
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
