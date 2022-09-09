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
            <div id="blur2" className="card" key={item.id}>
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default ProjectsSection;
