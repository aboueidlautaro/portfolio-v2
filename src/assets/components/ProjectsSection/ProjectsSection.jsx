import React from "react";
import "./ProjectsSection.css";
import results from "../../services/projects.json";
import { SiGithub } from "react-icons/si";
import { FiLink } from "react-icons/fi";

function ProjectsSection() {
  return (
    <section className="projects-container">
      <center>
        <h2>Projects</h2>
      </center>
      <article className="projects-container-cards">
        {results.results.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-content-links">
                  <a href={item.github} target="_blank">
                    <SiGithub size={28} />
                  </a>
                  <a href={item.url} target="_blank">
                    <FiLink size={28} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default ProjectsSection;
