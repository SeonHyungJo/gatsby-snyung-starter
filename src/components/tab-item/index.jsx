import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './index.scss'

const TabItem = ({ name = '', path = '/' }) =>
  <Link
    key={`${name}_${path}`}
    to={path}
    className={`tab-item`}
    activeClassName={`active`}
  >
    {name.toUpperCase()}
  </Link>

TabItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default TabItem;