import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import TagList from 'component/tag-list'

import './index.scss'

const PostHelmet = ({ title, excerpt, tags }) =>
  <Helmet
    title={`${title}`}
    meta={[
      { name: 'description', content: `${excerpt}` },
      { name: 'keywords', content: `${tags}` },
    ]}
  />

const BackBtn = ({ prevTo = '/posts' }) =>
  <div className="back-btn">
    <Link to={prevTo} className={'defaultClass, buttonContainer'}>{'Back'}</Link>
  </div>

const PostTemplate = ({ data }) => {
  const { rawMarkdownBody: html, excerpt, frontmatter } = data.markdownRemark
  const { title, date, tags } = frontmatter

  return (
    <>
      <PostHelmet title={title} excerpt={excerpt} tags={tags} />
      <article className="post-container">
        <div className={'post-header'}>
          <h1 className="title">{title}</h1>
          <p className="date">{date}</p>
          <BackBtn />
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div
          className="post-footer"
        >
          <TagList tags={tags} />
        </div>
      </article>

      {/* 댓글 기능 */}
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
      rawMarkdownBody
      id
      excerpt
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        path
        tags
        title
      }
    }
  }
`
