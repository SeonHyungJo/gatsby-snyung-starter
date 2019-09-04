import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Header from 'component/Header'

import 'style/prism-tomorrow.scss'
import 'style/baseLayout.scss'

const navList = [
  {
    path: '/posts',
    name: 'post',
  },
  {
    path: '/articles',
    name: 'article',
  },
  {
    path: '/category',
    name: 'category',
  },
]

export const pageQuery = graphql`
  query NavQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            path
          }
        }
      }
    }
  }
`

const CommonHelmet = () =>
  <Helmet
    title="Gatsby for SSEON"
    meta={
      [
        { name: 'description', content: 'sseon theme' },
        { name: 'keywords', content: 'sseon, blog, theme' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ]}
  >
    {/* 한국어 설정 */}
    <html lang="ko" />
  </Helmet>


export const Layout = ({ location, children }) =>
  <>
    <CommonHelmet />
    <Header location={location} navList={navList} />

    <div className="blog-posts-container">
      {children}
    </div>
  </>
