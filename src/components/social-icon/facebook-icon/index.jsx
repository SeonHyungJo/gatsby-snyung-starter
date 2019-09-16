import React from 'react'

const FacebookIcon = ({ href }) =>
  <a href={href} target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="m512 75v362c0 41.398438-33.601562 75-75 75h-121l-30-30h-30l-30 30h-151c-41.398438 0-75-33.601562-75-75v-362c0-41.398438 33.601562-75 75-75h362c41.398438 0 75 33.601562 75 75zm0 0" fill="#7984eb" />
      <path d="m512 75v362c0 41.398438-33.601562 75-75 75h-121l-30-30h-15v-482h166c41.398438 0 75 33.601562 75 75zm0 0" fill="#4661d1" />
      <path d="m316 180v60h90l-15 90h-75v182h-90v-182h-60v-90h60v-60c0-33.300781 18.300781-62.402344 45-78 13.199219-7.5 28.800781-12 45-12h90v90zm0 0" fill="#ececf1" />
      <path d="m316 180v60h90l-15 90h-75v182h-45v-410c13.199219-7.5 28.800781-12 45-12h90v90zm0 0" fill="#e2e2e7" />
    </svg>
  </a>

export default FacebookIcon;