import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './index.scss'

const Tag = ({ tagName }) =>
  // <Link to={`/category/${tagName}`}>
  <span className="tag">{`# ${tagName}`}</span>
// </Link>

Tag.propTypes = {
  tags: PropTypes.string,
}

export default Tag;