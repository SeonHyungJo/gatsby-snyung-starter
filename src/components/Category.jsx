import React from 'react'
import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'

import '../css/category.scss'

Category.propTypes = {
  tagName: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
}

export default function Category ({ tagName = '', count = 0 }) {
  return (
    <GatsbyLink to={`/tags/${tagName}`}>
      <div key={tagName} className="category-container">
        <div className="category-title">
          <span>{tagName}</span>
        </div>
        <div className="category-count">
          <span>{count}</span>
        </div>
      </div>
    </GatsbyLink>
  )
}
