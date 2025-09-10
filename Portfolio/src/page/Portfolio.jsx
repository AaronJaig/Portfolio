import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A web application built with React and Node.js.",
    imageUrl: "https://via.placeholder.com/1920x1080?text=Project+One",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A mobile-responsive e-commerce platform.",
    imageUrl: "https://via.placeholder.com/1920x1080?text=Project+Two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A data visualization dashboard using D3.js.",
    imageUrl: "https://via.placeholder.com/1920x1080?text=Project+Three",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A real-time chat application with WebSocket.",
    imageUrl: "https://via.placeholder.com/1920x1080?text=Project+Four",
  },
];

const PortfolioCard = ({ project }) => {
  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center py-5"
      style={{ margin: "0 2rem" }}
    >
      <div
        className="position-relative w-100 h-100"
        style={{ maxWidth: "1400px", maxHeight: "80vh" }}
      >
        <img
          src={project.imageUrl}
          className="img-fluid w-100 h-100 object-fit-cover rounded-3 shadow-lg"
          alt={project.title}
          style={{
            transition: "transform 0.5s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.02)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <div
          className="position-absolute bottom-0 start-0 w-100 p-4 text-white"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <h2 className="mb-0">{project.title}</h2>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <div className="mt-5 text-center py-5 bg-light text-white">
        <h1 className="display-4 text-dark">My Portfolio</h1>
      </div>
      {projects.map((project) => (
        <PortfolioCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;
