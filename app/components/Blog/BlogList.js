import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => (
  <div className="blog-list">
    {blogs.map((blog) => (
      <article className="blog-item" key={blog.id}>
        <header>
          <h3>
            <Link to={blog.link}>
              {blog.title}
            </Link>
          </h3>
          <p className="blog-date">
            <time>{blog.date}</time>
          </p>
        </header>
        <p className="blog-description">{blog.description}</p>
        <div className="blog-meta">
          <span className="blog-read-time">{blog.readTime}</span>
        </div>
        <div className="blog-tags">
          {blog.tags.map((tag) => (
            <span key={tag} className="blog-tag">{tag}</span>
          ))}
        </div>
      </article>
    ))}
  </div>
);

export default BlogList;
