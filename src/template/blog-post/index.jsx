import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import TagList from 'component/tag-list'
import Utterences from 'component/utterences'
import NameCardFull from 'component/name-card'
import SponsorButton from 'component/sponsor-btn'
import PageBtnContainer from 'component/post-move-btn'

import { utterences } from 'data/nameCard'
import './index.scss'

const PostHelmet = ({ title, excerpt, tags }) =>
  <Helmet
    title={`${title}`}
  />

const PostTemplate = (props) => {
  const { data, pageContext } = props
  const { html, excerpt, frontmatter } = data.markdownRemark
  const { title, date, tags } = frontmatter

  return (
    <>
      <PostHelmet title={title} excerpt={excerpt} tags={tags} />
      <div className="post-container">
        <div className={'post-header'}>
          <h1 className="title">{title}</h1>
          <p className="date">{date}</p>
        </div>
        <article
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <TagList tags={tags} />
        <div className="post-footer">
          <div className="post-footer-content">
            <NameCardFull cardMode={"simple-card"} />
            <SponsorButton sponsorId={'snyung'} />
          </div>
          <div className="post-footer-movebtn">
            <PageBtnContainer pageContext={pageContext} />
          </div>
        </div>
      </div>
      <Utterences {...utterences} />
    </>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object,
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`
