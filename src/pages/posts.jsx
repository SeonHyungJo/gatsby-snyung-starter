import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { LinkButton } from 'component/Button'
import PostItem from 'component/post-list-item'

import 'style/posts.scss'
import 'style/post.scss'

const Post = props => {
  const { data, pageContext } = props
  const { edges: posts } = data.allMarkdownRemark
  const { next, prev, numPages } = pageContext

  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node }) => {
          return <PostItem key={node.id} post={node} />
        })}
      <div className="posts-bottom">
        {prev === 0 ? (
          <div />
        ) : (
            <LinkButton to={`/posts/${prev}`} customClass={'moveLink'}>
              {' '}
              ← Prev
          </LinkButton>
          )}
        {next - 1 === numPages ? (
          <div />
        ) : (
            <LinkButton to={`/posts/${next}`} customClass={'moveLink'}>
              {' '}
              Next →
          </LinkButton>
          )}
      </div>
    </div>
  )
}

Post.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default Post

export const blogListQuery = graphql`
  query blogListQuery($skip: Int, $limit: Int) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { category: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt
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
