import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import NameCardFull from 'component/name-card'
import SponsorButton from 'component/sponsor-btn'

import './index.scss'

const CustomHelmet = ({ title }) =>
  <Helmet title={`${title}`} />

const AboutMe = ({ data }) => {
  const { html, id } = data.markdownRemark

  return (
    <>
      <CustomHelmet title={'About me - sNyung'} />

      <div key={id} className={'aboutme-container'}>
        <article className={'aboutme-content'} dangerouslySetInnerHTML={{ __html: html }} />
        <div className="aboutme-footer">
          <div className="aboutme-footer-content">
            <NameCardFull cardMode={"simple-card"} />
            <SponsorButton sponsorId={'snyung'} />
          </div>
        </div>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query AboutmeQuery {
    markdownRemark(frontmatter: { path: { eq: "/aboutme" } }) {
      id
      html
    }
  }
`

export default AboutMe
