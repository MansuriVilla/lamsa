import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/banner/Banner.jsx";
import Background from "../assets/images/who-we-are-hero.webp";

const ServicesPage = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/services.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch services data");
        return response.json();
      })
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

  // Filter valid blocks (those with either a title or non-empty details)
  const validBlocks =
    service.blocks?.filter((block) => {
      const hasTitle = block.use_bottom_title
        ? service.bottom_title
        : block.block_title;
      const hasDetails =
        block.details && block.details.some((detail) => detail.trim());
      return hasTitle || hasDetails;
    }) || [];

  return (
    <>
      <Banner title={service.title} image={Background} />
      <div className="custom-container service_page">
        <div className="service_page--inner ">
          <div className={`service_top service_${service.slug}-top`}>
            <div className="custom-d-flex flex-column">
              {service.description_title && (
                <h2 className="h3">{service.description_title}</h2>
              )}
              {service.description && (
                <p className="h3">{service.description}</p>
              )}
            </div>
          </div>
          {validBlocks.length > 0 && (
            <div className={`service_center service_${service.slug}-center`}>
              <div className="custom-d-flex">
                <div className="service_blocks">
                  {validBlocks.map((block, index) => (
                    <div
                      key={index}
                      className="service-block custom-d-flex flex-column"
                    >
                      {(block.use_bottom_title
                        ? service.bottom_title
                        : block.block_title) && (
                        <h4 className="service_block-title">
                          {block.use_bottom_title && service.bottom_title
                            ? service.bottom_title
                            : block.block_title}
                        </h4>
                      )}
                      {block.details &&
                        block.details.some((detail) => detail.trim()) && (
                          <ul className="service_details list_area custom-d-flex flex-column">
                            {block.details
                              .filter((detail) => detail.trim())
                              .map((detail, idx) => (
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
          )}

          <div className={`service_bottom service_${service.slug}-bottom`}>
            <h4 className="service_bottom-title">{service.bottom_title}</h4>
            {service.bottom_description && (
              <p className="service_bottom-description">
                {service.bottom_description}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
