import Hero from "../components/hero/Hero";
import Slider from "../components/slider/Slider.jsx";
import sectionImage from "../assets/images/TempImg.webp";
import Statistics from "../components/countup/Statistics.jsx";
import SEO from "../components/SEO/SEO.jsx";

import BlogSection from "../components/BlogSection/BlogSection.jsx";
import TestimonialSection from "../components/testimonials/TestimonialSection.jsx";

export default function Home() {
  return (
    <div className="main">
      <SEO
        title="Home"
        description="LAMSA INFOSOLUTIONS delivers comprehensive Web Secure Solutions, combining cutting-edge development with enterprise-grade security."
      />
      <Hero />
      <div className="main__content">
        <Slider
          sectionTitle="Section Title"
          subHeading="Hello World"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          sectionImage={sectionImage}
        />
        <Statistics
          items={[
            { title: "PROJECTS", end: 500 },
            { title: "HAPPY CLIENTS", end: 500 },
            { title: "ONGOING PROJECTS", end: 500 },
            { title: "EXPERIENCE", end: 500 },
          ]}
        />
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
