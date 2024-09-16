import React from "react";
import ParticlesComponent from "../particels/Partical.jsx";
import "./hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero-main">
        <ParticlesComponent id="customParticales" />
        <div className="hero__content">
          <h1>Network Services</h1>
          <p>
            Ishan Technologies provides seamless, high-speed network
            connectivity across India.
          </p>
          <div className="theme_cta">
            <a href="#" className="cta">
              Know more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
