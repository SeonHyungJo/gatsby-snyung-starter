import React from 'react'

const YoutubeIcon = ({ href }) =>
  <a href={href} target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 -61 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="m437 0h-362c-41.398438 0-75 33.601562-75 75v240c0 41.398438 33.601562 75 75 75h362c41.398438 0 75-33.601562 75-75v-240c0-41.398438-33.601562-75-75-75zm0 0" fill="#ff3939" />
      <path d="m512 75v240c0 41.398438-33.601562 75-75 75h-181v-390h181c41.398438 0 75 33.601562 75 75zm0 0" fill="#c90232" />
      <path d="m256 136.199219-75-41.699219v204l75-43.199219 105.601562-60.601562zm0 0" fill="#ececf1" />
      <path d="m361.601562 194.699219-105.601562 60.601562v-119.101562zm0 0" fill="#e2e2e7" />
    </svg>
  </a>

export default YoutubeIcon;