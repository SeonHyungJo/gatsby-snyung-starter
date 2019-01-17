import React from 'react'
import GatsbyLink from 'gatsby-link'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'

import '../css/posts.scss'
import '../css/post.scss'

Posts.propTypes = {
  data: PropTypes.object
}

export default function Posts(props) {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout {...props}>
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <div className="blog-container">
                  <p className="title">
                    <GatsbyLink to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </GatsbyLink>
                  </p>
                </div>
                <div className="blog-container">
                  <div className="blog-sub-container">
                    <p className="summary">{post.excerpt}</p>
                    <div className="tagContainer">
                      {post.frontmatter.tags.map(tag => {
                        return (
                          <GatsbyLink key={`posts_${tag}`} to={`/tags/${tag}`}>
                            <span className="tag">{tag}</span>
                          </GatsbyLink>
                        )
                      })}
                    </div>
                  </div>
                  <div className="blog-sub-container">
                    <p className="date">{post.frontmatter.date}</p>
                    <p className="author">{`By ${post.frontmatter.author}`}</p>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            path
            tags
            author
          }
        }
      }
    }
  }
`
