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
      image: "images/tutor.jpg",
    },
    {
      title: "Tekken8 Player Tracker",
      description:
        "This was a passion project I made to track what characters I had the best win to loss ratio with in Tekken 8. The project was built using HTML, CSS, and PHP.",
      link: "https://github.com/Brettygibb/Tekken8PlayerTracker/tree/WorkingDev",
      image: "images/tekken.jpg",
    },
    {
      title: "BGRadio",
      description:
        "For this project, I built a fully self-hosted online radio station to gain hands-on experience with streaming technology and server management. Using Icecast as the streaming server and Mixxx as the broadcasting software, I set up a 24/7 music stream. To provide a user-friendly interface, I developed a companion website using HTML, CSS, and PHP, enabling listeners to tune in seamlessly. The entire system is hosted on my home server, where I configured and optimized the backend for stability, ensuring uninterrupted streaming. This project deepened my understanding of network protocols, server deployment, and real-time media streaming while reinforcing my skills in web development and Linux system administration.",
      link: "http://bgradio.ddns.net/",
      image: "images/BGRadio.png",
    },
    {
      title: "Merch App",
      description:
        "I developed this project to streamline merchandising tasks for my part-time job by implementing a CRUD-based inventory management system. The application allows users to create, read, update, and delete product entries and features an Excel export function to generate comprehensive reports of all store products. Built using React, JavaScript, HTML, and CSS, the frontend provides an intuitive interface for managing inventory efficiently. The system is hosted on my home server, where I configured the backend for optimal performance and reliability. This project enhanced my expertise in frontend development, state management, and file handling, while also reinforcing my experience in server deployment and data processing.",
      link: "http://159.2.165.154:3000/",
      image: "images/Merch.png",
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
                <hr></hr>
                <p className="card-text flex-grow-1">{project.description}</p>
              </div>
              {/* Card Footer */}
              <div className="card-footer text-center">
                <button
                  className="btn-view-project"
                  onClick={() => handleButtonClick(project.link)}
                >
                  <span className="btn-text-one">View Project</span>
                  <span className="btn-text-two">Click Me</span>
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
