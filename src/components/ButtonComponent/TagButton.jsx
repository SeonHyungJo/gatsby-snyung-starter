import React from 'react'
import PropTypes from 'prop-types'

import DefaultButton from './DefaultButton'

import '../../css/tag.scss'

const Tags = ({ list = [] }) => (
  <div className="tagContainer">
    {list.map((tag, index) => {
      return (
        <DefaultButton
          key={`${index}_${tag}`}
          to={`/tags/${tag}`}
          customClass={'tag'}
        >
          {tag}
        </DefaultButton>
      )
    })}
  </div>
)

Tags.propTypes = {
  list: PropTypes.array
}

Tags.defaultProps = {
  list: []
}

export default Tags
