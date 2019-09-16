import React from 'react'
import NameCard from 'component/name-card'

import './index.scss'

const NameCardFull = ({ cardMode = false }) => {
  const cardModeClass = cardMode ? 'simple-card' : ''

  return (
    <div className={`card-container ${cardModeClass}`}>
      <NameCard cardMode={cardMode} />
    </div>
  )
}

export default NameCardFull
