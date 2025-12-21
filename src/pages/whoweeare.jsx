import Slider from "../components/slider/Slider.jsx";
import Banner from "../components/banner/Banner.jsx";
import Background from "../assets/images/who-we-are-hero.webp";
import sectionImage from "../assets/images/avatar-image.png";

export default function Whoweare() {
  return (
    <>
      <div className="main">
        <Banner title="WHO WE ARE" image={Background} />
        <div className="main__content">
          <h2>The Glance Of Our Team</h2>
          <Slider
            subHeading="Team Member Name 1"
            designation="Member 1 designation"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            sectionImage={sectionImage}
          />
          <Slider
            subHeading="Team Member Name 2"
            designation="Member 2 designation"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            sectionImage={sectionImage}
          />
          <Slider
            subHeading="Team Member Name 3"
            designation="Member 3 designation"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            sectionImage={sectionImage}
          />
          <Slider
            subHeading="Team Member Name 4"
            designation="Member 4 designation"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            sectionImage={sectionImage}
          />
        </div>
      </div>
    </>
  );
}
