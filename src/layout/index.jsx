import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'
import { TransitionGroup, Transition } from 'react-transition-group'

import Header from 'component/header'
import TabContianer from 'component/tab-container'
import NameCardFull from 'component/name-card-full'
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

const Layout = (props) => {
  const { location = '/', children } = props
  const pathSplit = location.pathname.split('/')
  const [scrolling, setScrolling] = useState(false)
  const [cardMode, setCardMode] = useState(pathSplit[1] !== '')
  const checkContent = pathSplit[1] === 'content' || pathSplit[1] === 'aboutme'

  const changeCardMode = () => {
    setCardMode(prevMode => !prevMode)
    navigate(tabList[0].path)
  }

  const handleScroll = () => {
    setScrolling(true)

    console.log('scrolling', scrolling)

    if (!scrolling) {
      setTimeout(() => {
        changeCardMode()
      }, 0)
    }
  }

  useEffect(() => {
    const indexPathCheck = location.pathname !== '/'
    console.log('useEffect', location.pathname, indexPathCheck)

    setCardMode(indexPathCheck)
    setScrolling(indexPathCheck)
  }, [location.pathname])

  return (
    <div className={'scroll-box'} onScroll={handleScroll}>
      <CustomHelmet />

      <Header title={'sNyung-starter'}>
        <TabContianer tabList={tabList} />
      </Header>

      {checkContent || <NameCardFull key={pathSplit[1]} cardMode={cardMode} />}

      <TransitionGroup component={null}>
        <Transition
          key={location.pathname}
          timeout={{ enter: 300, exit: 500 }}
        >
          {status => (
            <div className={`blog-posts-container ${status}`}>
              {children}
              {cardMode && <Footer />}
            </div>
          )}
        </Transition>

      </TransitionGroup>
    </div >
  )
}


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
