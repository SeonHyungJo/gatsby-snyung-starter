import React from 'react'
import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'

import './index.scss'

export const CategoryCard = ({ tagName = '', count = 0 }) => (
  <GatsbyLink to={`/category/${tagName}`}>
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

CategoryCard.propTypes = {
  tagName: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}
