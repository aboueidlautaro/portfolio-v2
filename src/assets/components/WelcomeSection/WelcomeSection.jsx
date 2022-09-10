import React from "react";
import AnimatedMouse from "../AnimatedMouse/AnimatedMouse";
import SplineCake from "../SplineCake/SplineCake";
import "./WelcomeSection.css";
import curriculum from "../../static/CV-Lautaro-Aboueid.pdf";

function WelcomeSection() {
  return (
    <>
      <section className="welcome-container">
        <article className="welcome-text-container">
          <div className="welcome-text-top">
            <span>Hi</span>
            <img
              src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/waving-hand_light-skin-tone_1f44b-1f3fb_1f3fb.png"
              alt=""
            />
            <span>!</span>
          </div>
          <div className="welcome-text-middle">
            <h1>I'm Lautaro Aboueid, </h1>
            <h2 id="title-stack">Web Developer</h2>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/aboueidlautaro/"
              id="btnHireMe"
            >
              Hire me
            </a>
            <a download href={curriculum} id="btnCV">
              CV
            </a>
          </div>
        </article>

        <article className="welcome-spline-container">
          <div className="spline-container">
            <SplineCake />
          </div>
        </article>
        <AnimatedMouse />
      </section>
    </>
  );
}

export default WelcomeSection;
