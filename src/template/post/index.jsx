import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import TagList from 'component/tag-list'
import Utterences from 'component/utterences'

import { utterences } from 'data/nameCard'
import './index.scss'

const PostHelmet = ({ title, excerpt, tags }) =>
  <Helmet
    title={`${title}`}
    meta={[
      { name: 'description', content: `${excerpt}` },
      { name: 'keywords', content: `${tags}` },
    ]}
  />

const PostTemplate = ({ data }) => {
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
        <div
          className="post-footer"
        >
          <TagList tags={tags} />
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
        date(formatString: "MMMM Do, YYYY")
        path
        tags
        title
      }
    }
  }
`
