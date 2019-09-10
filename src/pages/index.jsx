import React, { useState } from "react"
import NameCardFull from "component/name-card-full"

const IndexPage = () => {
  const [cardMode, setCardMode] = useState(false)

  const scroll = () => {
    setCardMode(prevMode => !prevMode)
  }

  return (
    <div onClick={() => scroll()}>
      <NameCardFull cardMode={cardMode} />
    </div>
  )
}

export default IndexPage
