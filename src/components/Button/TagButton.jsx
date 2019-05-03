import React from 'react'
import PropTypes from 'prop-types'

import DefaultButton from './DefaultButton'

import 'style/tag.scss'

const Tags = ({ list = [] }) => (
  <div className="tagContainer">
    {list.map((tag, index) => {
      return (
        <DefaultButton
          key={`${index}_${tag}`}
          to={`/category/${tag}`}
          customClass={'tag'}
        >
          {tag}
        </DefaultButton>
      )
    })}
  </div>
)

Tags.propTypes = {
  list: PropTypes.array,
}

export default Tags
