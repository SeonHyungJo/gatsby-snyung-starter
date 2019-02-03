import React from 'react'
import PropTypes from 'prop-types'

import DefaultButton from './DefaultButton'

import '../../css/link.scss'

const LinkButton = ({ children, to, customClass }) => (
  <DefaultButton to={to} customClass={`link ${customClass}`}>
    {children}
  </DefaultButton>
)

LinkButton.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
  customClass: PropTypes.string
}

LinkButton.defaultProps = {
  children: 'Link',
  to: 'https://gatsby-sseon-starter.netlify.com/',
  customClass: ''
}

export default LinkButton
