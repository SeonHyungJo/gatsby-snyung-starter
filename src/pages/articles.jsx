import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from 'component/Layout'
import PostList from 'component/PostList'

const Article = props => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout {...props}>
      <PostList posts={posts} />
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.object
}

export const ArticleQuery = graphql`
  query ArticleQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "article" } } }
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

export default Article
