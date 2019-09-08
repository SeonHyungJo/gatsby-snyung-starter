import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './index.scss'

const Title = ({ title }) =>
  <Link to={'/'} className={'header-title'}>
    {title}
  </Link>

const TabList = ({ tabList }) =>
  tabList.map(({ name, path }) =>
    <Link
      key={name}
      to={path}
      className={`tab-item`}
      activeClassName={`active`}
    >
      {name.toUpperCase()}
    </Link>
  )

const Header = ({ title = '', tabList = [] }) => (
  <div className='header-container'>
    <Title
      title={title}
      location={'/'}
    />

    <div>
      <TabList tabList={tabList}></TabList>
    </div>
  </div >
)

Header.propTypes = {
  title: PropTypes.string,
  tabList: PropTypes.array.isRequired
}

export default Header
