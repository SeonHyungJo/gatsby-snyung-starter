import React from 'react'
import PropTypes from 'prop-types'
import NameCard from 'component/name-card'

import './index.scss'

const NameCardFull = ({ cardMode = false }) =>
  <div className={`card-container ${cardMode ? 'simple-card' : ''}`}>
    <NameCard cardMode={cardMode} />
  </div>

NameCardFull.propTypes = {
  cardMode : PropTypes.bool.isRequired
}

export default NameCardFull
