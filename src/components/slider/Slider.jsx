import React from "react";
import "./slider.css";

export default function Slider(props) {
  return (
    <>
      <div className="slider__section">
        <div className="section__title">
          <h3 className="title">{props.sectionTitle}</h3>
        </div>
        <div className="slider_main">
          <div className="custom-container">
            <div className="item">
              <div className="slider__content_main">
                <div className="slider_left">
                  <h4 className="slider_title">{props.subHeading}</h4>
                  <p>{props.details}</p>
                </div>
                <div className="slider_right">
                  <img src={props.sectionImage} alt="Section" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
