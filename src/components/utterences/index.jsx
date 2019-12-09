import React, { useEffect, useRef } from 'react'

import './index.scss'

const src = 'https://utteranc.es/client.js'

const Utterences = ({ repo, theme }) => {
  const rootElm = useRef()

  useEffect(() => {
    const utterances = document.createElement('script')
    const utterancesConfig = {
      src,
      repo,
      theme,
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    }

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    rootElm.current.appendChild(utterances)
  }, [])

  return (<div className="utterences" ref={rootElm} />)
}

export default Utterences