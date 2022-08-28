import React, { useEffect, useState } from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import Navbar from "../components/Navbar/Navbar";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";

function Home() {
  const [coordScroll, setCordScroll] = useState(0);
  const [cordSection, setCordSection] = useState(0);
  const secondSection = document.getElementById("second-section");

  const cordSectionCalc = cordSection - 160;

  useEffect(() => {
    const section = document.getElementById("second-section");
    setCordSection(section.offsetTop);

    window.addEventListener("scroll", () => {
      setCordScroll(window.scrollY);
    });
  }, [coordScroll, cordSection]);

  return (
    <>
      <div>
        <WelcomeSection />
        {coordScroll >= cordSectionCalc ? <Navbar /> : null}
        <AboutSection id="second-section" />
      </div>
    </>
  );
}
export default Home;
