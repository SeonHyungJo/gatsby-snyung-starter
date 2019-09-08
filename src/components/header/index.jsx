import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './index.scss'

const Title = ({ title }) =>
  <Link to={'/'} className={'header-title'}>
    {title}
  </Link>

const Header = ({ title = '', children }) => (
  <div className='header-container'>
    <Title
      title={title}
      location={'/'}
    />

    <div>
      {children}
    </div>
  </div >
)

Title.propTypes = {
  title: PropTypes.string,
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
