import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

const TabItem = ({ name, path }) =>
  <Link
    key={`${name}_${path}`}
    to={path}
    className={`tab-item`}
    activeClassName={`active`}
  >
    {name.toUpperCase()}
  </Link>

export default TabItem;