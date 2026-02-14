import SEO from "../../components/SEO/SEO.jsx";
import Banner from "../../components/banner/Banner.jsx";
import ServiceCard from "../../components/ServiceCard/ServiceCard.jsx";
import "../../components/ServiceSection/servicesection.css";

const ServicesCollection = () => {
  return (
    <>
      <SEO
        title="Our Services - Comprehensive Tech Solutions"
        description="Explore LAMSA INFOSOLUTIONS' wide range of services including cybersecurity, ICT infrastructure, data center solutions, and web secure solutions."
      />
      <div className="services-collection">
        <Banner
          title="Our Services"
          subtitle="Empowering your business with cutting-edge technology and secure infrastructure solutions."
        />

        <div
          className="service_section"
          style={{ background: "transparent", padding: "100px 0" }}
        >
          <div className="custom-container">
            <div className="service_bottom-inner">
              <ServiceCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCollection;
