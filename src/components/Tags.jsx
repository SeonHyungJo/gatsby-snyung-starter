import React from 'react'
import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'

import '../css/tag.scss'

Tags.propTypes = {
  list: PropTypes.list
}

export default function Tags({ list = [] }) {
  return (
    <div className="tagContainer"> 
      {list.map((tag, index) => {
        return (
          <GatsbyLink key={`${index}_${tag}`} to={`/tags/${tag}`}>
            <span className="tag">{tag}</span>
          </GatsbyLink>
        )
      })}
    </div>
  )
}