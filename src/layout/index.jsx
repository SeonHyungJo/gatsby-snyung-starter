import { graphql, navigate } from 'gatsby'
import React, { useState, useEffect } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Header from 'component/header'
import TabContianer from 'component/tab-container'
import NameCardFull from 'component/name-card-full'
import Footer from 'component/footer'

import { tabList } from 'data/tabList'

import 'style/prism-tomorrow.scss'
import 'style/baseLayout.scss'

import './index.scss'

const CONTENT_LIST = ['content', 'aboutme']
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

// 전체 레이아웃
const Layout = (props) => {
  const { location = '/', children } = props
  const pathSplit = location.pathname.split('/')
  const checkContent = CONTENT_LIST.includes(pathSplit[1])

  const [scrolling, setScrolling] = useState(false)
  const [cardMode, setCardMode] = useState(pathSplit[1] !== '')

  const handleScroll = () => {
    setScrolling(true)
    setCardMode(true)

    if (!scrolling) {
      setTimeout(() => {
        navigate(tabList[0].path)
      }, 450)
    }
  }

  useEffect(() => {
    const indexPathCheck = location.pathname !== '/'

    setCardMode(indexPathCheck)
    setScrolling(indexPathCheck)
  }, [location.pathname])

  return (
    <div className={'scroll-box'} onScroll={handleScroll}>
      {/* Common Helmet*/}
      <CustomHelmet />

      {/* Common Header */}
      <Header title={'sNyung.com'}>
        <TabContianer tabList={tabList} />
      </Header>

      {/* Name Card */}
      {checkContent || <NameCardFull key={pathSplit[1]} cardMode={cardMode ? 'simple-card' : ''} />}

      <TransitionGroup>
        <Transition
          key={location.pathname}
          timeout={{ enter: 300, exit: 500 }}
        >
          {status => (
            <div className={`blog-posts-container ${status}`}>
              {children}
              {<Footer />}
            </div>
          )}
        </Transition>
      </TransitionGroup>
    </div >
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
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
