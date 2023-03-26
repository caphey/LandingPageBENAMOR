import React from "react";
import styles, { layout } from "../style";
import Divider from "./Divider";
import { project_1, project_2, project_3 } from "../assets";
import { useState, useEffect } from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className={`${styles.paddingY} ${layout.sectionInfo} items-center `}
    >
      <h2 className={`${styles.heading2} uppercase text-center`}>
        enjoy our <span className="text-secondary">latest</span>
        <br className="sm:block hidden" /> projects
      </h2>
      <div className={`${styles.flexCenter} flex-row mt-12`}>
        <Divider />
        <p
          className={`${styles.paragraph} uppercase text-secondary px-6 text-center`}
        >
          our work
        </p>
        <Divider />
      </div>
      <Slider />
    </section>
  );
};

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: project_1, size: "w-full h-full" },
    { image: project_2, size: "w-full h-full" },
    { image: project_3, size: "w-full h-full" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="flex-col mt-6">
      <div className={`${styles.flexCenter} overflow-hidden`}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              styles.flexCenter
            } transition-all duration-500 transform ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-70 scale-90 sm:block hidden"
            }`}
          >
            <img src={slide.image} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="mt-6 relative">
        <ul className="flex justify-center ">
          {slides.map((slide, index) => (
            <li key={index} className="mx-2">
              <button
                className="relative w-4 h-4 bg-contrast border-primary border-4 focus:outline-none"
                onClick={() => setCurrentSlide(index)}
              >
                {index === currentSlide && (
                  <div
                    className={`absolute top-0 left-0 w-full h-full ${styles.flexCenter}`}
                  >
                    <div className="p-3 border-2 border-blue-500" />
                  </div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
