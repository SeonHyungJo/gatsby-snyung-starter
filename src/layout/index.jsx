import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { TransitionGroup, Transition } from 'react-transition-group'

import Header from 'component/header'
import TabContianer from 'component/tab-container'
import Footer from 'component/footer'

import { tabList } from 'data/tabList'

import 'style/prism-tomorrow.scss'
import 'style/baseLayout.scss'

import './index.scss'

const CustomHelmet = () => (
  <Helmet
    title="Gatsby for SSEON"
    meta={[
      { name: 'description', content: 'sseon theme' },
      { name: 'keywords', content: 'sseon, blog, theme' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ]}
  >
    <html lang="ko" />
  </Helmet>
)

const Layout = ({ location = '/', children }) => (
  <>
    <CustomHelmet />

    <Header title={'sNyung-starter'}>
      <TabContianer tabList={tabList} />
    </Header>

    <TransitionGroup component={null}>
      <Transition
        key={location.pathname}
        timeout={{ enter: 500, exit: 500 }}
        onExit={() => console.log('onExit')}
      >
        {status => (
          <div className={`blog-posts-container ${status}`}>{children}</div>
        )}
      </Transition>
    </TransitionGroup>

    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout

export const pageQuery = graphql`
  query NavQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
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
