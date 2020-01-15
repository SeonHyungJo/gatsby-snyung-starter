import { graphql, navigate } from 'gatsby'
import React, { useState, useEffect, useRef } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Header from 'component/header'
import TabContianer from 'component/tab-container'
import TagSlider from 'component/tag-slider'
import NameCardFull from 'component/name-card-full'
import Footer from 'component/footer'

import { tabList } from 'data/tabList'

import 'style/prism-tomorrow.scss'
import 'style/baseLayout.scss'

import './index.scss'

const CONTENT_LIST = ['content', 'aboutme']
const SLIDER_PAGE_LIST = ['', 'content', 'aboutme', 'article']
const CustomHelmet = () => (
  <Helmet
    title="Gatsby for sNyung"
    meta={[
      { name: 'description', content: 'snyung theme' },
      { name: 'keywords', content: 'snyung, blog, theme' },
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
  const checkSlider = SLIDER_PAGE_LIST.includes(pathSplit[1])
  const checkPostPath = pathSplit[1] === "post"
  const bodyElm = useRef()

  const [scrolling, setScrolling] = useState(false)
  const [cardMode, setCardMode] = useState(pathSplit[1])
  const [filterList, setFilter] = useState([])

  const handleScroll = () => {
    setScrolling(true)
    setCardMode('simple-card')

    if (!scrolling) {
      setTimeout(() => {
        navigate(tabList[0].path)
      }, 450)
    }
  }

  useEffect(() => {
    checkPostPath && navigate(tabList[0].path)
  }, [filterList])

  useEffect(() => {
    checkSlider && setFilter([])
  }, [checkSlider])

  useEffect(() => {
    const indexPathCheck = location.pathname !== '/'

    setScrolling(indexPathCheck)
    setCardMode(indexPathCheck ? 'simple-card' : '')

    bodyElm.current.scrollTo(0,0)
  }, [location.pathname])

  return (
    <div className={'scroll-box'} onScroll={handleScroll} ref={bodyElm}>
      {/* Common Helmet*/}
      <CustomHelmet />

      {/* Common Header */}
      <Header title={'sNyung.com'}>
        <TabContianer tabList={tabList} />
      </Header>

      {/* Name Card */}
      {checkContent || <NameCardFull key={pathSplit[1]} cardMode={cardMode} />}
      {checkSlider ||
        <div className="blog-posts">
          <TagSlider setFilter={setFilter} />
        </div>
      }

      <TransitionGroup>
        <Transition
          key={location.pathname}
          timeout={{ enter: 300, exit: 500 }}
        >
          {status => (
            <div className={`blog-posts-container ${status}`}>
              {React.cloneElement(children, { filterList })}
              {location.pathname !== '/' && <Footer />}
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
