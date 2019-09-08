import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from 'util/commonUtil'

import 'style/button.scss'

/**
 * @description Button for External Link
 */
const SNSButton = ({
  children = 'Button',
  to = 'https://gatsby-sseon-starter.netlify.com/',
}) => (
  <a href={to}>
    <div className={classNames(`defaultClass, snsBtn`)}>{children}</div>
  </a>
)

SNSButton.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
}

export default SNSButton
