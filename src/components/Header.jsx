import React from 'react'
import PropTypes from 'prop-types'

import { DefaultButton } from 'component/Button'
import { classNames } from 'util/commonUtil'

import 'style/header.scss'

/**
 * @description 상단 헤더 부분 구현
 */
const Header = ({ title = '', navList = [] }) => (
  <div className={classNames('HeaderContainer')}>
    {/* Header Title */}
    <DefaultButton to="/" customClass={classNames('HeaderTitle')}>
      {title}
    </DefaultButton>

    {/* 상위 버튼 넣을 공간 또는 다른 것을 넣을 공간 */}
    {/* 기본적으로 nav를 넣기 위한 공간 */}
    <div className={classNames('HeaderNav')}>
      {navList.map(navItem => {
        return (
          <DefaultButton key={navItem.name} to={navItem.path}>
            {navItem.name.toUpperCase()}
          </DefaultButton>
        )
      })}
    </div>
  </div>
)

Header.propTypes = {
  title: PropTypes.string,
  navList: PropTypes.array.isRequired,
}

export default Header
