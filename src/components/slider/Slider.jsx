import React from "react";
import TempImg from "../../assets/images/TempImg.png";
import "./slider.css";

export default function Slider() {
  return (
    <>
      <div className="slider__section">
        <div className="section__title">
          <h3 className="title">section title</h3>
        </div>
        <div className="slider_main">
          <div className="custom-container">
            <div className="item">
              <div className="slider__content_main">
                <div className="slider_left">
                  <h4 className="slider_title">Hello World</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dignissimos doloremque, ipsum ad accusantium quae sit non
                    quam, minima dolores facere molestias natus! Sit voluptatum
                    cumque fuga odit sequi ex esse.
                  </p>
                </div>
                <div className="slider_right">
                  <img src={TempImg} alt="Image of slider" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
