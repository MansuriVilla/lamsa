import React from "react";
import Slider from "../components/slider/Slider.jsx";
import Banner from "../components/banner/Banner.jsx";
import Background from "../assets/images/who-we-are-hero.webp";
import sectionImage from "../assets/images/TempImg.webp";

export default function Whoweare() {
  return (
    <>
      <div className="main">
        <Banner title="WHAT WE DO" image={Background} />
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
