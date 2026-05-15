import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';
import blogs, { blogImports } from '../data/blogs';

// Lazy load markdown files dynamically from blogImports
const getBlogContent = (id) => {
  const importFn = blogImports[id];
  return importFn ? importFn() : Promise.resolve(null);
};

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
      loading: true,
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const content = await getBlogContent(id);
    if (content) {
      this.setState({ markdown: content.default, loading: false });
    } else {
      this.setState({ loading: false });
    }
  }

  render() {
    const { id } = this.props.match.params;
    const { markdown, loading } = this.state;

    // Find blog data from the imported blogs
    const blog = blogs.find(b => b.id === id);

    if (loading) {
      return (
        <Main>
          <div className="post">
            <p>Loading blog post...</p>
          </div>
        </Main>
      );
    }

    if (!blog || !markdown) {
      return (
        <Main>
          <div className="post">
            <p>Blog post not found.</p>
            <Link to="/blog">Back to Blog</Link>
          </div>
        </Main>
      );
    }

    // Make all hrefs react router links
    const LinkRenderer = ({ ...children }) => <Link {...children} />;

    return (
      <Main>
        <Helmet title={blog.title} />
        <article className="post" id="blog-post">
          <header>
            <div className="title">
              <h2>{blog.title}</h2>
              <p>{blog.subtitle}</p>
            </div>
            <div className="meta">
              <time className="published">{blog.date}</time>
              <span className="author">
                <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="Author" />
              </span>
            </div>
          </header>
          <section>
            <ReactMarkdown
              source={markdown}
              renderers={{
                Link: LinkRenderer,
              }}
              escapeHtml={false}
            />
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
            <div className="actions">
              <span
                className="button icon fa-share"
                onClick={(e) => {
                  e.preventDefault();
                  if (navigator.share) {
                    navigator.share({
                      title: blog.title,
                      url: window.location.href,
                    }).catch(console.error);
                  } else {
                    // Fallback: copy to clipboard
                    navigator.clipboard.writeText(window.location.href).then(() => {
                      alert('Link copied to clipboard!');
                    });
                  }
                }}
                style={{ cursor: 'pointer' }}
                title="Share this post"
              >
                Share this post
              </span>
              <div className="share-icons">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-icon icon"
                  title="Share on X (Twitter)"
                  aria-label="Share on X (Twitter)"
                >
                  <span className="icon fa-twitter" aria-hidden="true" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-icon icon"
                  title="Share on LinkedIn"
                  aria-label="Share on LinkedIn"
                >
                  <span className="icon fa-linkedin" aria-hidden="true" />
                </a>
                <a
                  href={`https://reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-icon icon"
                  title="Share on Reddit"
                  aria-label="Share on Reddit"
                >
                  <span className="icon fa-reddit" aria-hidden="true" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-icon icon"
                  title="Share on Facebook"
                  aria-label="Share on Facebook"
                >
                  <span className="icon fa-facebook" aria-hidden="true" />
                </a>
              </div>
              <Link to="/blog" className="button icon fa-arrow-left">Back to Blog</Link>
            </div>
          </footer>
        </article>
      </Main>
    );
  }
}

export default BlogPost;
