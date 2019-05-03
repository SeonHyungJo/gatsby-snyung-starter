import React from 'react'
import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'

import { classNames } from 'util/commonUtil'

import 'style/button.scss'

/**
 * @description 상단 헤더 부분 Nav Button 구현
 */
const DefaultButton = ({
  children = 'Button',
  to = 'https://gatsby-sseon-starter.netlify.com/',
  customClass = '',
}) => (
  <GatsbyLink
    to={to}
    className={customClass || classNames('defaultClass, buttonContainer')}
  >
    {children}
  </GatsbyLink>
)

DefaultButton.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string,
  customClass: PropTypes.string,
}

export default DefaultButton
