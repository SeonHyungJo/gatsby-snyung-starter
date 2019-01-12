import React from 'react'
import GatsbyLink from 'gatsby-link'

import '../css/category.scss'

export default function Category({ tagName = '', count = 0 }) {
  return (
    <GatsbyLink to={`/tags/${tagName}`}>
      <div key={tagName} className='category-container'>
        <div className='category-title'>
          <span>{tagName}</span>
        </div>
        <div className='category-count'>
          <span>{count}</span>
        </div>
      </div>
    </GatsbyLink>
  )
}
