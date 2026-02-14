import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function BlogCard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/blogs.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch blogs data");
        return response.json();
      })
      .then((data) => {
        setBlogs(data.blogs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="blogs-collection">
        <div className="blogs-collection__loading">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          to={`/blog/${blog.slug}`}
          className="blogs-collection__card"
        >
          <div className="blogs-collection__card-image-wrap">
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="blogs-collection__card-image"
            />
            <div className="blogs-collection__card-category">
              {blog.category}
            </div>
          </div>
          <div className="blogs-collection__card-content">
            <div className="blogs-collection__card-meta">
              <span>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="dot">•</span>
              <span>{blog.readTime}</span>
            </div>
            <h3 className="blogs-collection__card-title">{blog.title}</h3>
            <p className="blogs-collection__card-excerpt">{blog.excerpt}</p>
            <div className="blogs-collection__card-footer">
              <span className="read-more">Read Full Article</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default BlogCard;
