import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import PostItem from 'component/post-item'
import PageBtnContainer from 'component/page-btn'

const Article = ({ data, pageContext }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div className="blog-posts">
      {
        posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node }) => <PostItem key={node.id} post={node} />)
      }
      <PageBtnContainer pageContext={pageContext} />
    </div>
  )
}

Article.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default Article

export const ArticleQuery = graphql`
  query ArticleQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "article" } } }
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

