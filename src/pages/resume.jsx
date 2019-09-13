import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

const CustomHelmet = ({ title }) => {
  <Helmet title={`Blog - ${title}`} />
}

const AboutMe = ({ data }) => {
  const { html, id, frontmatter } = data.markdownRemark
  const { title, date } = frontmatter

  return (
    <>
      {/* <CustomHelmet title={title} /> */}

      <div key={id}>
        <article className="blog-post">
          <h1 className="title">{title}</h1>
          <h2 className="date">{date}</h2>

          <div className="backBtn">
            {/* <DefaultButton to={'/posts'}>{'Back'}</DefaultButton> */}
          </div>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

        </article>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query AboutmeQuery {
    markdownRemark(frontmatter: { path: { eq: "/aboutme" } }) {
      id
      rawMarkdownBody
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        path
        tags
        title
      }
    }
  }
`

export default AboutMe
