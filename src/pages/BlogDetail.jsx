import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO/SEO.jsx";
import "./blogdetail.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/blogs.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch blogs data");
        return response.json();
      })
      .then((data) => {
        const selectedBlog = data.blogs.find((b) => b.slug === slug);
        setBlog(selectedBlog);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-detail">
        <div className="blog-detail__loading">Loading...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-detail">
        <div className="blog-detail__error">Blog post not found</div>
      </div>
    );
  }

  // Get author initials for avatar
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <>
      <SEO
        title={blog.title}
        description={blog.excerpt || blog.content.introduction}
      />

      <div className="blog-detail">
        {/* Hero Section */}
        <div className="blog-detail__hero">
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="blog-detail__hero-image"
          />
          <div className="blog-detail__hero-overlay">
            <div className="blog-detail__hero-content">
              <span className="blog-detail__category">{blog.category}</span>
              <h1 className="blog-detail__title">{blog.title}</h1>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="blog-detail__container">
          {/* Metadata Bar */}
          <div className="blog-detail__meta">
            <div className="blog-detail__author">
              <div className="blog-detail__author-avatar">
                {getInitials(blog.author.name)}
              </div>
              <div className="blog-detail__author-info">
                <p className="blog-detail__author-name">{blog.author.name}</p>
                <p className="blog-detail__author-role">{blog.author.role}</p>
              </div>
            </div>
            <div className="blog-detail__meta-item">
              <span className="blog-detail__meta-icon">📅</span>
              <span>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="blog-detail__meta-item">
              <span className="blog-detail__meta-icon">⏱️</span>
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <article className="blog-detail__content">
            {/* Introduction */}
            <div className="blog-detail__introduction">
              {blog.content.introduction}
            </div>

            {/* Content Sections */}
            {blog.content.sections.map((section, index) => (
              <section key={index} className="blog-detail__section">
                <h2 className="blog-detail__section-heading">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="blog-detail__paragraph"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </section>
            ))}

            {/* Conclusion */}
            {blog.content.conclusion && (
              <div className="blog-detail__conclusion">
                <h2 className="blog-detail__conclusion-heading">
                  {blog.content.conclusion.heading}
                </h2>
                {blog.content.conclusion.paragraphs.map((paragraph, index) => (
                  <p key={index} className="blog-detail__conclusion-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </article>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="blog-detail__tags">
              <div className="blog-detail__tags-label">Tags</div>
              <div className="blog-detail__tags-list">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="blog-detail__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
