import SEO from "../components/SEO/SEO.jsx";
import "../assets/css/blogscollection.css";
import Banner from "../components/banner/Banner.jsx";
import BlogCard from "../components/BlogCard/BlogCard.jsx";

const BlogsCollection = () => {
  return (
    <>
      <SEO
        title="Our Blog - Latest Insights & Security Trends"
        description="Stay updated with the latest trends in cybersecurity, AI, and cloud computing from the Lamsa Security Team."
      />
      <div className="blogs-collection">
        <Banner
          title="Latest insights"
          subtitle="Exploring the frontiers of cybersecurity, artificial intelligence, and cloud technology."
        />

        <div className="blogs-collection__container">
          <div className="blogs-collection__grid">
            <BlogCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsCollection;
