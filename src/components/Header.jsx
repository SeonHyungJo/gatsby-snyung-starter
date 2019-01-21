import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import { classNames } from '../util/commonUtil'

import '../css/header.scss'

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element
}

/**
 * @description 상단 헤더 부분 구현
 */
export default function Header ({ title = 'Main Header', children }) {
  return (
    <div className={classNames('HeaderContainer')}>
      {/* Header Title */}
      <Link
        to="/"
        style={{
          textDecoration: 'none'
        }}
        className={classNames('HeaderTitle')}
      >
        {title}
      </Link>

      {/* 상위 버튼 넣을 공간 또는 다른 것을 넣을 공간 */}
      {/* 기본적으로 nav를 넣기 위한 공간 */}
      <div className={classNames('HeaderNav')}>{children}</div>
    </div>
  )
}
