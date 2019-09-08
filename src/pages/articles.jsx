import React from 'react'
import GatsbyLink from 'gatsby-link'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Layout } from 'layout'
import { LinkButton } from 'component/Button'
import { classNames } from 'util/commonUtil'

const Article = props => {
  const { data, pageContext } = props
  const { edges: posts } = data.allMarkdownRemark
  const { next, prev, numPages } = pageContext

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
                          <GatsbyLink
                            key={`postList_${tag}`}
                            to={`/category/${tag}`}
                          >
                            <span className="tag">{tag}</span>
                          </GatsbyLink>
                        )
                      })}
                    </div>
                  </div>
                  <div className={classNames('blog-sub-container, right')}>
                    <p className="date">{post.frontmatter.date}</p>
                    <p className="author">{`By ${post.frontmatter.author}`}</p>
                  </div>
                </div>
              </div>
            )
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
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
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
