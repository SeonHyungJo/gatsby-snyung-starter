import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './index.scss'

const PageBtn = ({ to, text }) =>
  <Link to={to} className={'page-btn'}>
    {text}
  </Link>

const PageBtnContainer = ({ pageContext: { prev, next, categoryName } }) =>
  <div className="page-btn-container">
    {prev === '' ? <div /> : <PageBtn to={`/${categoryName}/${prev === 0 ? '' : prev}`} text={'← Prev'} />}
    {next === '' ? <div /> : <PageBtn to={`/${categoryName}/${next}`} text={'Next →'} />}
  </div>

PageBtnContainer.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default PageBtnContainer