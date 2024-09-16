import React from "react";
import Hero from "../components/hero/Hero";
import Slider from "../components/slider/Slider.jsx";

export default function Home() {
  return (
    <>
      <div className="main">
        <Hero />
        <div className="main__content">
          <Slider />
          <Slider />
        </div>
      </div>
    </>
  );
}
