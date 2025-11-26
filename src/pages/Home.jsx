import Hero from "../components/hero/Hero";
import Slider from "../components/slider/Slider.jsx";
import sectionImage from "../assets/images/TempImg.webp";
import ProjectIcon from "../assets/images/project_icon.svg";

import BlogSection from "../components/BlogSection/BlogSection.jsx";
import TestimonialSection from "../components/testimonials/TestimonialSection.jsx";

export default function Home() {
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
            ].map((item) => (
              <div key={item.title} className="level-item has-text-centered">
                <div>
                  <img src={ProjectIcon} alt="Icon" />
                  <p className="heading">{item.title}</p>
                  <span className="title">{item.end}+</span>
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
        <TestimonialSection />
        <BlogSection />
      </div>
    </div>
  );
}
