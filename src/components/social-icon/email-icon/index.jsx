import React from 'react'


const EmailIcon = ({ href }) =>
  <a href={href}>
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="m0 241 121 120v-180zm0 0" fill="#5a5a5a" />
      <path d="m391 181v180l121-120zm0 0" fill="#444" />
      <path d="m91 0h330v421h-330zm0 0" fill="#ede9e8" />
      <path d="m256 0h165v421h-165zm0 0" fill="#dfd7d5" />
      <path d="m256 181c-49.5 0-90 40.5-90 90v30h180v-30c0-49.5-40.5-90-90-90zm0 0" fill="#73bcff" />
      <path d="m346 271v30h-90v-120c49.5 0 90 40.5 90 90zm0 0" fill="#0095ff" />
      <path d="m256 61c-33 0-60 27-60 60s27 60 60 60 60-27 60-60-27-60-60-60zm0 0" fill="#73bcff" />
      <path d="m256 181v-120c33 0 60 27 60 60s-27 60-60 60zm0 0" fill="#0095ff" />
      <path d="m0 512 144.953125-74.257812 66.046875-61.742188-211-135zm0 0" fill="#ffbd86" />
      <path d="m301 376 86.664062 75 124.335938 61v-271zm0 0" fill="#f6a96c" />
      <path d="m512 512h-512l211-136h90zm0 0" fill="#fed2a4" />
      <path d="m512 512h-256v-136h45zm0 0" fill="#ffbd86" />
    </svg>
  </a>

export default EmailIcon;