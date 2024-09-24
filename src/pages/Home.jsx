import React from "react";
import Hero from "../components/hero/Hero";
import Slider from "../components/slider/Slider.jsx";
import Background from "../assets/images/who-we-are-hero.webp";
import sectionImage from "../assets/images/TempImg.webp";

export default function Home() {
  return (
    <>
      <div className="main">
        <Hero />
        <div className="main__content">
          <Slider
            subHeading="Hello World"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            sectionImage={sectionImage}
          />
          <Slider
            subHeading="Hello World"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            sectionImage={sectionImage}
          />
        </div>
      </div>
    </>
  );
}
