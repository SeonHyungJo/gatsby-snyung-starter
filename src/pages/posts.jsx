import React from 'react'
import GatsbyLink from 'gatsby-link'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { LinkButton } from 'component/Button'
import { classNames } from 'util/commonUtil'

import 'style/posts.scss'
import 'style/post.scss'

const Tags = ({ tags }) =>
  tags.map(tag => (
    <GatsbyLink key={`postList_${tag}`} to={`/category/${tag}`}>
      <span className="tag">{tag}</span>
    </GatsbyLink>
  ))

const PostItem = ({ post }) => (
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
          <Tags tags={post.frontmatter.tags} />
        </div>
      </div>
      <div className={classNames('blog-sub-container, right')}>
        <p className="date">{post.frontmatter.date}</p>
        <p className="author">{`By ${post.frontmatter.author}`}</p>
      </div>
    </div>
  </div>
)

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
