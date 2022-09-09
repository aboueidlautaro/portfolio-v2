import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { FiLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import "./Works.css";
import "swiper/css";
import { useEffect } from "react";
import works from "../../services/projects.json";

function Works() {
  const [show, setShow] = useState(true);

  const onHover = () => {
    document
      .querySelector(".works-container")
      .classList.add("works-container-hover");
  };

  const onHoverOut = () => {
    document
      .querySelector(".works-container")
      .classList.remove("works-container-hover");
  };

  return (
    <section
      onClick={() => {
        if (show) {
          setShow(false);
        }
      }}
      className="works-container"
    >
      <center>
        <h2>My works</h2>
      </center>
      <article className="works-container-card">
        <div className="card">
          {show ? (
            <div className="card-content">
              <Swiper
                modules={[Autoplay, Navigation]}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                {works.results.map((value) => {
                  return (
                    <SwiperSlide className="swiper-card" key={value.id}>
                      <div className="swiper-card-image">
                        <img src={value.image} />
                      </div>
                      <div className="swiper-card-description">
                        <p>{value.description}</p>

                        <div className="swiper-card-buttons">
                          <a href={value.url} target="_blank">
                            <FiLink />
                          </a>
                          <a href={value.github}>
                            <SiGithub />
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          ) : (
            <button
              onMouseOver={onHover}
              onMouseLeave={onHoverOut}
              onClick={() => {
                setShow(true);
              }}
              className="btnShowWorks"
            >
              Show all works
            </button>
          )}
        </div>
      </article>
    </section>
  );
}

export default Works;
