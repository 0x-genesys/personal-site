import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ blog }) => (
  <article className="post" id="blog-post">
    <header>
      <div className="title">
        <h2>{blog.title}</h2>
        <p>{blog.subtitle}</p>
      </div>
      <div className="meta">
        <time className="published">
          {blog.date}
        </time>
        <span className="author">
          <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="Author" />
        </span>
      </div>
    </header>
    {blog.image && (
      <Link to={blog.link} className="image featured" target="_blank" rel="noopener noreferrer">
        <img src={`${BASE_PATH}/${blog.image}`} alt={blog.title} />
      </Link>
    )}
    <section>
      <p>{blog.description}</p>
      <p>
        Read the full article on{' '}
        <a href={blog.link} target="_blank" rel="noopener noreferrer">
          Medium
        </a>
        . {blog.readTime}.
      </p>
    </section>
    <footer>
      <ul className="stats">
        {blog.tags.map((tag) => (
          <li key={tag}>
            <span className="icon fa-tag">
              <span className="label">{tag}</span>
            </span>
          </li>
        ))}
      </ul>
    </footer>
  </article>
);

export default BlogPost;
