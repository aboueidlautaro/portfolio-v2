import React from "react";
import "./AboutSection.css";

function AboutSection(props) {
  return (
    <section className="aboutme-container" id={props.id}>
      <article className="aboutme-container-info">
        <div className="emoji-info">
          <img
            src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/technologist-light-skin-tone_1f9d1-1f3fb-200d-1f4bb.png"
            alt=""
          />
        </div>
        <div className="text-info">
          <h2>
            I consider myself a person with a restless mind who likes to learn
            by herself, I believe each project is a new challenge to learn and
            grow professionally.
          </h2>
        </div>
      </article>
    </section>
  );
}

export default AboutSection;
