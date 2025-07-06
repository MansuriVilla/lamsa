import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/banner/Banner.jsx";
import Background from "../assets/images/who-we-are-hero.webp";

const ServicesPage = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedService = data.services.find((s) => s.slug === slug);
        setService(selectedService);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!service)
    return <div className="text-center py-5">Service not found</div>;

  return (
    <>
      <Banner title={service.title} image={Background} />
      <div className="custom-container service_page">
        <section className={`service_top service_${service.slug}-top`}>
          <div className="custom-d-flex flex-column">
            <h2 className="h3">{service.description_title}</h2>
            <h3 className="h3">{service.description}</h3>
          </div>
        </section>
        <div className={`service_center  service_${service.slug}-center`}>
          <div className="custom-d-flex">
            <div className="service_blocks custom-d-flex">
              {service.blocks.map((block, index) => (
                <div
                  key={index}
                  className="service-block custom-d-flex flex-column"
                >
                  <h4 className="service_block-title">{block.block_title}</h4>
                  {block.details && (
                    <ul className="service_details list_area custom-d-flex flex-column">
                      {block.details.map((detail, idx) => (
                        <li key={idx} className="service_details-item">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className={`service_bottom service_${service.slug}-bottom`}>
          <h4 className="service_bottom-title">{service.bottom_title}</h4>
          <p className="service_bottom-description">
            {service.bottom_description}
          </p>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
