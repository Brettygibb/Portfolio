import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function Projects() {
  const projectList = [
    {
      title: "Tutor WebSite System Project ",
      description:
        "This was a project I worked on for my final project in my final year of College. It was a website that was designed to help students find tutors in their area. The website was built using HTML, CSS, JavaScript, and PHP.",
      link: "https://github.com/Brettygibb/TutorWebSiteSystemProject",
      image: "/images/tutor.jpg",
    },
    {
      title: "Tekken8 Player Tracker",
      description:
        "This was a passion project I made to track what characters I had the best win to loss ratio with in Tekken 8. The project was built using HTML, CSS, and PHP.",
      link: "https://github.com/Brettygibb/Tekken8PlayerTracker/tree/WorkingDev",
      image: "/images/tekken.jpg",
    },
    // Add more projects as needed
  ];
  const handleButtonClick = (link) => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  return (
    <section id="projects" className="container my-5">
      <h2 className="mb-4 text-center">My Projects</h2>
      <hr></hr>
      <div className="row">
        {projectList.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top project-image"
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal-${index}`}
                style={{ cursor: "pointer" }}
              />
              {/* Modal */}
              <div
                className="modal fade"
                id={`exampleModal-${index}`}
                tabIndex="-1"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src={project.image}
                        className="d-block w-100"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Card Body */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
              </div>
              {/* Card Footer */}
              <div className="card-footer text-center">
                <button
                  className="btn-view-project"
                  onClick={() => handleButtonClick(project.link)}
                >
                  <span className="btn-text-one">View Project</span>
                  <span className="btn-text-two">On Github</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
