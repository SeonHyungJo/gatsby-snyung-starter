import React from 'react';
import GatsbyLink from 'gatsby-link';
import { graphql } from 'gatsby';

import Link from '../components/Link';
import Layout from '../components/Layout';

import '../css/index.scss';

export default function Index(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout {...props}>
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <p className="title">
                  <GatsbyLink to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </GatsbyLink>
                </p>
                {/* <p className="date">
                  {post.frontmatter.date}
                </p> */}
                <p className="summary">
                  {post.excerpt}
                </p>
                <div>
                  {post.frontmatter.tags.map(tag => {
                    return <span className="tag" >{tag}</span>
                  })
                  }
                </div>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 160)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
          }
        }
      }
    }
  }
`;
