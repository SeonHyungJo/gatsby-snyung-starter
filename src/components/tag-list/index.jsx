import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './index.scss'

const TagList = ({ tags = [] }) =>
  <div className="tag-container">
    {tags.map(tag => (
      <Link key={`postList_${tag}`} to={`/category/${tag}`}>
        <span className="tag">{`#${tag}`}</span>
      </Link>
    ))}
  </div>

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default TagList;