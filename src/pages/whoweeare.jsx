import React from "react";
import Slider from "../components/slider/Slider.jsx";
import Banner from "../components/banner/Banner.jsx";
import Background from "../assets/images/who-we-are-hero.webp";

export default function Whoweare() {
  return (
    <>
      <div className="main">
        <Banner title="WHO WE ARE" image={Background} />
        <div className="main__content">
          <Slider />
          <Slider />
          <Slider />
        </div>
      </div>
    </>
  );
}
