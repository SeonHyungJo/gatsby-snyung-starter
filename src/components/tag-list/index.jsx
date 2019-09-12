import React from 'react'
import PropTypes from 'prop-types'

import Tag from 'component/tag-item'

const TagList = ({ tags = [] }) =>
  <div className="tag-container">
    {tags.map(tagName =>
      <Tag tagName={tagName} />
    )}
  </div>

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default TagList;