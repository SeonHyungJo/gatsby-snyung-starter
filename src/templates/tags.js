import React from 'react';
import GatsbyLink from 'gatsby-link';
import HomeIcon from 'react-icons/lib/fa/home';
import TagsIcon from 'react-icons/lib/fa/tags';

import Layout from '../components/Layout';
import Link from '../components/Link';

import '../css/index.scss';
import '../css/post.scss';

function Tags({ posts, post, tag }) {
  if (tag) {
    return (
      <div className="blog-posts">
        <h1>
          {post.length} Post{post.length === 1 ? '' : 's'} tagged with "{tag}"
        </h1>
          {post.map(({ id, frontmatter, excerpt }) => {
            return (
              <div className="blog-post-preview" key={id}>
                <div className="blog-sub-container">
                  <p className="title">
                    <GatsbyLink to={frontmatter.path}>
                      {frontmatter.title}
                    </GatsbyLink>
                  </p>
                  <p className="summary">
                    {excerpt}
                  </p>
                  <div className="tagContainer">
                    {frontmatter.tags.map(tag => {
                      return (
                        <GatsbyLink to={`/tags/${tag}`}>
                          <span className="tag" >{tag}</span>
                        </GatsbyLink>
                      )
                    })
                    }
                  </div>
                </div>
                {/* <div className="blog-sub-container">
                  <p className="img">
                    이미지
                  </p>
                  <p className="date">
                    {frontmatter.date}
                  </p>
                </div> */}
              </div>
            );
          })}
        <Link to="/tags">
          <TagsIcon /> All tags
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Tags</h1>
      <ul className="tags">
        {Object.keys(posts).map(tagName => <li key={tagName}>
          <GatsbyLink to={`/tags/${tagName}`}>
            {tagName}
          </GatsbyLink>
        </li>)}
      </ul>
      <Link to="/">
        <HomeIcon /> All posts
      </Link>
    </div>
  );
}

export default function TagsTemplate(props) {
  const { pageContext } = props;
  return (
    <Layout {...props}><Tags {...pageContext} /></Layout>
  );
}
