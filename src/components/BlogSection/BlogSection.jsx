import "./blogsection.css";
import { Link } from "react-router-dom";
import cyberSecurityImg from "../../assets/images/cyber_security_shield.png";
import aiNeuralImg from "../../assets/images/ai_neural_network.png";
import cloudComputingImg from "../../assets/images/cloud_computing_tech.png";

export default function BlogSection() {
  const blogData = [
    {
      id: 1,
      slug: "zero-trust-architecture",
      title: "Zero Trust Architecture: The Future of Cybersecurity",
      description:
        "Explore how Zero Trust security models are revolutionizing enterprise protection by eliminating implicit trust and continuously verifying every access request.",
      image: cyberSecurityImg,
      alt: "Cybersecurity Shield",
    },
    {
      id: 2,
      slug: "ai-powered-threat-detection",
      title: "AI-Powered Threat Detection in 2025",
      description:
        "Discover how artificial intelligence and machine learning algorithms are transforming cybersecurity by identifying and neutralizing threats in real-time.",
      image: aiNeuralImg,
      alt: "AI Neural Network",
    },
    {
      id: 3,
      slug: "securing-multi-cloud-environments",
      title: "Securing Multi-Cloud Environments",
      description:
        "Learn best practices for protecting data across multiple cloud platforms and implementing robust security frameworks for hybrid infrastructure.",
      image: cloudComputingImg,
      alt: "Cloud Computing",
    },
  ];

  return (
    <section className="blog_section">
      <div className="blog_inner">
        <div className="blog_top">
          <h2>Latest Insights</h2>
        </div>
        <div className="blog_bottom">
          <div className="bottom_cards">
            {blogData.map((blog) => (
              <Link
                className="blog_card"
                to={`/blog/${blog.slug}`}
                key={blog.id}
              >
                <div className="blog_card_inner">
                  <div className="blog_card_top">
                    <img src={blog.image} alt={blog.alt} />
                  </div>
                  <div className="blog_card_bottom">
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
