import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./servicesection.css";
import BluredLayer from "../BluredLayer/BluredLayer";
import Cta from "../cta/Cta";

export default function ServiceSection() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data.services || []))
      .catch((err) => console.error("Error loading services:", err));
  }, []);

  // Helper function to truncate text to specified length
  const truncateText = (text, maxLength = 50) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="service_section">
      <div className="service_inner">
        <div className="service_section-top custom-container">
          <h2>Service Section</h2>
        </div>
        <div className="service_bottom">
          <div className="custom-container">
            <div className="service_bottom-inner">
              {services.map((service) => (
                <div className="service_item" key={service.slug}>
                  <div className="service_icon">
                    <img
                      className="service_item-image"
                      src={service.image}
                      alt={service.title}
                      decoding="async"
                    />
                  </div>
                  <BluredLayer />
                  <div className="service_item-content">
                    <h3 className="service_content-title">{service.title}</h3>
                    <p className="service_content-description">
                      {truncateText(service.description, 100)}
                    </p>
                    <Cta
                      ctatext="Learn More"
                      ctalink={`/services/${service.slug}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
