import React from 'react'

import './index.scss'

const SponsorButton = ({ sponsorId }) =>
  // <div className="sponsor-button">
  <a
    className="sponsor-button"
    href={`https://www.buymeacoffee.com/${sponsorId}`}
    target="_blank"
  >
    <img
      src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
      alt="Buy Me A Coffee"
    />
    <span>Buy me a coffee</span>
  </a>
// </div>

export default SponsorButton