import React from 'react'
import GatsbyLink from 'gatsby-link'
import { graphql } from 'gatsby'

import Link from '../components/Link'
import Layout from '../components/Layout'

import '../css/posts.scss'
import '../css/post.scss'

export default function PostList(props) {
  const { data, pageContext } = props
  const { edges: posts } = data.allMarkdownRemark
  const { next, prev, numPages } = pageContext

  return (
    <Layout {...props}>
      <div className='blog-posts'>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className='blog-post-preview' key={post.id}>
                <div className='blog-container'>
                  <p className='title'>
                    <GatsbyLink to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </GatsbyLink>
                  </p>
                </div>
                <div className='blog-container'>
                  <div className='blog-sub-container'>
                    <p className='summary'>
                      {post.excerpt}
                    </p>
                    <div className='tagContainer'>
                      {post.frontmatter.tags.map(tag => {
                        return (
                          <GatsbyLink key={`postList_${tag}`} to={`/tags/${tag}`}>
                            <span className='tag'>{tag}</span>
                          </GatsbyLink>
                        )
                      })}
                    </div>
                  </div>
                  <div className='blog-sub-container'>
                    <p className='date'>
                      {post.frontmatter.date}
                    </p>
                    <p className='author'>
                      {`By ${post.frontmatter.author}`}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        <div className='posts-bottom'>
          {prev === 0 ? <div /> : (<Link to={`/posts/${prev}`} className={'moveLink'}> ← Prev
                                  </Link>)}
          {next - 1 === numPages ? <div /> : (<Link to={`/posts/${next}`} className={'moveLink'}> Next →
          </Link>)}
        </div>
      </div>
    </Layout>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
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
