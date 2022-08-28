import React from "react";
import "./Skills.css";
import results from "../../services/skills.json";

function Skills() {
  return (
    <section className="skills-container">
      <center>
        <h2>Skills</h2>
      </center>
      <article className="skills-container-cards">
        {results.results.map((item) => {
          return (
            <button className="skills-card" key={item.id}>
              <div className="skills-card-image">
                <img src={item.logo} alt={item.title} />
              </div>
              <div className="skills-card-content">
                <h2>{item.title}</h2>
              </div>
            </button>
          );
        })}
      </article>
    </section>
  );
}

export default Skills;
