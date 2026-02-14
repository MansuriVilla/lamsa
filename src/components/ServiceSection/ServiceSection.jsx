import "./servicesection.css";
import ServiceCard from "../ServiceCard/ServiceCard";

export default function ServiceSection() {
  return (
    <div className="service_section">
      <div className="service_inner">
        <div className="service_section-top custom-container">
          <h2>Service Section</h2>
        </div>
        <div className="service_bottom">
          <div className="custom-container">
            <div className="service_bottom-inner">
              <ServiceCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
