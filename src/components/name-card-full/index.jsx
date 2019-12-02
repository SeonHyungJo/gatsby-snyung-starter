import React from 'react'
import PropTypes from 'prop-types'
import NameCard from 'component/name-card'

import './index.scss'

const NameCardFull = ({ cardMode }) =>
  <div className={`card-container ${cardMode}`}>
    <NameCard cardMode={cardMode} />
  </div>

NameCardFull.propTypes = {
  cardMode : PropTypes.string.isRequired
}

export default NameCardFull
