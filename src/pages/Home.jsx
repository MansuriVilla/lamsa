import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/hero/Hero";
import Slider from "../components/slider/Slider.jsx";
import sectionImage from "../assets/images/TempImg.webp";
import ProjectIcon from "../assets/images/project_icon.svg";
import CountUpWrapper from "../components/countup/CountUpWrapper.jsx";

export default function Home() {
  const countRefs = useRef([]);
  const [showPlus, setShowPlus] = useState(Array(4).fill(false)); // Initialize state for each counter

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countRefs.current.forEach((ref) => {
              if (ref) ref.start(); // Ensure ref is not null
            });
            observer.unobserve(entry.target); // Stop observing after it runs once
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the target is visible
      }
    );

    const target = document.querySelector(".level");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  const handleComplete = (index) => {
    setShowPlus((prev) => {
      const newState = [...prev];
      newState[index] = true; // Show the plus sign for this counter
      return newState;
    });
  };

  return (
    <div className="main">
      <Hero />
      <div className="main__content">
        <Slider
          sectionTitle="Section Title"
          subHeading="Hello World"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          sectionImage={sectionImage}
        />
        <div className="counter_main">
          <div className="level custom-container">
            {[
              { title: "PROJECTS", end: 500 },
              { title: "HAPPY CLIENTS", end: 500 },
              { title: "ONGOING PROJECTS", end: 500 },
              { title: "EXPERIENCE", end: 500 },
            ].map((item, index) => (
              <div key={item.title} className="level-item has-text-centered">
                <div>
                  <img src={ProjectIcon} alt="Icon" />
                  <p className="heading">{item.title}</p>
                  <CountUpWrapper
                    className="title"
                    start={0}
                    end={item.end}
                    duration={5}
                    separator=","
                    ref={(el) => (countRefs.current[index] = el)} // Assign the ref
                    onComplete={() => handleComplete(index)} // Call handleComplete on finish
                  />
                  {showPlus[index] && <span>+</span>}{" "}
                  {/* Display the + sign conditionally */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Slider
          sectionTitle="Section Title"
          subHeading="Hello World"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          sectionImage={sectionImage}
        />
      </div>
    </div>
  );
}
