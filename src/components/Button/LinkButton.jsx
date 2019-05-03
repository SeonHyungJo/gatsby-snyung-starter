import React from 'react'
import PropTypes from 'prop-types'

import DefaultButton from './DefaultButton'

import 'style/link.scss'

const LinkButton = ({
  children = 'Link',
  to = 'https://gatsby-sseon-starter.netlify.com/',
  customClass = '',
}) => (
  <DefaultButton to={to} customClass={`link ${customClass}`}>
    {children}
  </DefaultButton>
)

LinkButton.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
  customClass: PropTypes.string,
}

export default LinkButton
