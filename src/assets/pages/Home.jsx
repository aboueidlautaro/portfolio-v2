import React, { useEffect, useState } from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import Navbar from "../components/Navbar/Navbar";
import Works from "../components/Works/Works";

import Skills from "../components/Skills/Skills";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";

function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const [coordScroll, setCordScroll] = useState(0);
  const [cordSection, setCordSection] = useState(0);
  const secondSection = document.getElementById("second-section");

  const cordSectionCalc = cordSection - 160;

  const onClickShow = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    const section = document.getElementById("second-section");
    setCordSection(section.offsetTop);

    window.addEventListener("scroll", () => {
      setCordScroll(window.scrollY);
    });
  }, [coordScroll, cordSection]);

  return (
    <>
      <div className="main-page-container">
        <WelcomeSection />
        {coordScroll >= cordSectionCalc ? <Navbar /> : null}
        <AboutSection id="second-section" />
        <Works />
        <Skills />
      </div>
    </>
  );
}
export default Home;
