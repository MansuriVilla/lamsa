import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard.jsx";
import "./blogsection.css";

export default function BlogSection() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogData(data.blogs.slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  return (
    <section className="blog_section">
      <div className="blog_inner">
        <div className="blog_top">
          <h2>Latest Insights</h2>
        </div>
        <div className="blog_bottom">
          <div className="bottom_cards">
            <BlogCard />
          </div>
        </div>
      </div>
    </section>
  );
}
