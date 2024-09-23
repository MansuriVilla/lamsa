import React from "react";
import Slider from "../components/slider/Slider.jsx";
import Banner from "../components/banner/Banner.jsx";
import Background from "../assets/images/TempImg.webp";

export default function Whoweare() {
  return (
    <>
      <div className="main">
        <Banner title="WHAT WE DO" image={Background} />
        <div className="main__content">
          <Slider />
          <Slider />
          <Slider />
        </div>
      </div>
    </>
  );
}
