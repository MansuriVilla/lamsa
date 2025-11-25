import ParticlesComponent from "../particels/Partical.jsx";
import "./hero.css";
import Cta from "../cta/Cta.jsx";
export default function Hero() {
  return (
    <>
      <div className="hero-main">
        <ParticlesComponent id="customParticales" />
        <div className="hero__content">
          <h1>Cyber Services</h1>
          <p>
            LAMSA INFOSOLUTIONS: Connecting India with Seamless, High-Speed
            Networks
          </p>
          <Cta ctatext="Know more" ctalink="#" />
        </div>
      </div>
    </>
  );
}
