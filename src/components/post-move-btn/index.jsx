import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './index.scss'

const PageBtn = ({ to, text }) =>
  <Link to={to} className={'post-move-btn'}>
    {text}
  </Link>

const PageBtnContainer = ({ pageContext: { prev = '', next = '' } }) =>
  <div className="post-move-btn-container">
    {!prev ? <div /> : <PageBtn to={`${prev.frontmatter.path}`} text={`← ${prev.frontmatter.title}`} />}
    {!next ? <div /> : <PageBtn to={`${next.frontmatter.path}`} text={`${next.frontmatter.title} →`} />}
  </div>

PageBtnContainer.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default PageBtnContainer