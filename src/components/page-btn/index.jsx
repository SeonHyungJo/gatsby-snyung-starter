import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './index.scss'

const PageBtn = ({ to, text }) =>
  <Link to={to} className={'page-btn'}>
    {text}
  </Link>

const PageBtnContainer = ({ pageContext: { prev, next, numPages } }) =>
  <div className="page-btn-container">
    {prev === 0 ? <div /> : <PageBtn to={`/posts/${prev}`} text={'← Prev'} />}
    {next - 1 === numPages ? <div /> : <PageBtn to={`/posts/${next}`} text={'Next →'} />}
  </div>

PageBtnContainer.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default PageBtnContainer