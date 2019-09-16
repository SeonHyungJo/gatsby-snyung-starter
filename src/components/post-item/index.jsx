import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import TagList from 'component/tag-list'

import './index.scss'

const PostListItem = ({ post }) =>
  <div className="blog-post-preview" key={post.id}>
    <Link to={post.frontmatter.path}>
      <div className="blog-container">
        <h1 className="title">
          {post.frontmatter.title}
        </h1>
      </div>
      <p className="summary">{post.excerpt}</p>
    </Link >

    <TagList tags={post.frontmatter.tags} />
  </div >

PostListItem.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostListItem;