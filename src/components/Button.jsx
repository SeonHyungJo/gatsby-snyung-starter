import React from 'react'
import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'

import { classNames } from '../util/commonUtil'

import '../css/button.scss'

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

/**
 * @description 상단 헤더 부분 Nav Button 구현
 */
export default function Button({ children = 'Button', type = 'nav', to = '' }){
  return (
    <>
      {type === '' ? (<GatsbyLink to={to}>
        <div
          className={
            type.toLowerCase() === 'nav'
              ? classNames('defaultClass, buttonContainer')
              : classNames(`defaultClass, ${type}`)
          }
        >
          {children}
        </div>
      </GatsbyLink>)
        :
        (
          <a href={to}>
            <div
              className={
                type.toLowerCase() === 'nav'
                  ? classNames('defaultClass, buttonContainer')
                  : classNames(`defaultClass, ${type}`)
              }
            >
              {children}
            </div>
          </a>
        )
      }

    </>
  )
}


