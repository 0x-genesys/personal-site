import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';
import BlogList from '../components/Blog/BlogList';
import BlogPost from './BlogPost';
import data from '../data/blogs';

const Blog = () => (
  <Main fullPage>
    <Helmet title="Blog" />
    <Switch>
      <Route exact path="/blog" component={() => (
        <article className="post" id="blog">
          <header>
            <div className="title">
              <h2><Link to="/blog">Blog</Link></h2>
              <p>My latest thoughts, tutorials, and projects.</p>
            </div>
          </header>
          <div className="post-content">
            <p>
              Welcome to my blog! I write about machine learning, blockchain, and software engineering.
              Here you will find detailed technical posts about my recent projects and what I am learning.
            </p>
            <BlogList blogs={data} />
          </div>
        </article>
      )} />
      <Route path="/blog/:id" component={BlogPost} />
    </Switch>
  </Main>
);

export default Blog;
