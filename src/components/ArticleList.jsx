import React from 'react'
import PropTypes from 'prop-types'
import GatsbyLink from 'gatsby-link'

import 'style/posts.scss'
import 'style/post.scss'

const PostList = ({ posts = [] }) => (
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
                      <GatsbyLink key={`posts_${tag}`} to={`/category/${tag}`}>
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
)

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default PostList
