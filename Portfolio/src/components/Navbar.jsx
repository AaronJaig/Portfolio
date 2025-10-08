import Portfolio from "../page/viewPortfolio";
import { useState } from "react";

function Navbar() {
  const [active] = useState("active");

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg fixed-top"
        style="background-color: #1a1a1a"
      >
        <div class="container">
          <a class="navbar-brand text-orange fw-bold" href="#">
            MyPortfolio
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link text-white active"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#myproject">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#contact">
                  Contact
                </a>
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
