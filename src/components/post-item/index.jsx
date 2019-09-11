import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './index.scss'

const Tags = ({ tags }) =>
  tags.map(tag => (
    <Link key={`postList_${tag}`} to={`/category/${tag}`}>
      <span className="tag">{`#${tag}`}</span>
    </Link>
  ))

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

    <div className="tag-container">
      <Tags tags={post.frontmatter.tags} />
    </div>
  </div >

PostListItem.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostListItem;