import React from "react";
import "./AboutSection.css";

function AboutSection(props) {
  return (
    <section className="aboutme-container" id={props.id}>
      <article className="aboutme-container-info">
        <h2>ABOUT SECTION</h2>
      </article>
    </section>
  );
}

export default AboutSection;
