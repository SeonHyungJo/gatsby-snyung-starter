import React from 'react'
import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'

import '../css/link.scss'

Link.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired
}

export default function Link ({ children, className, to }) {
  return (
    <GatsbyLink
      key={`key_${children}`}
      className={['link'].concat(className || []).join(' ')}
      to={to}
    >
      {children}
    </GatsbyLink>
  )
}
