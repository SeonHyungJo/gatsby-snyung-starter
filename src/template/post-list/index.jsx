import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import PostItem from 'component/post-item'
import PageBtnContainer from 'component/page-btn'

import './index.scss'

const usePosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query Posts($category: String) {
        allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC }
          filter: {frontmatter: {category: {eq: $category } } }
        ) {
          edges {
            node {
              excerpt
              id
              frontmatter {
                title
                date(formatString: "YYYY/MM/DD")
                path
                tags
                category
              }
            }
          }
        }
      }
    `
  )

  return allMarkdownRemark.edges
}

const visiblePosts = (posts, filterList, { category }) =>
  posts
    .filter(({ node }) => node.frontmatter.category === category)
    .filter(({ node }) => {
      if (filterList.length == 0) {
        return true
      } else {
        for (const key of filterList) {
          if (node.frontmatter.tags && node.frontmatter.tags.includes(key)) {
            return true
          }
        }
      }
      return false
    })
    .filter(post => {
      return post.node.frontmatter.title.length > 0
    })

const Post = ({ pageContext, filterList }) => {
  const posts = usePosts()
  const { skip, limit } = pageContext
  const postList = visiblePosts(posts, filterList, pageContext)

  return (
    <div className="blog-posts">
      {
        postList
          .slice(skip, skip + limit)
          .map(({ node }) => <PostItem key={node.id} post={node} />)
      }
      <PageBtnContainer nextWhether={skip < postList.length && postList.length <= skip + limit} pageContext={pageContext} />
    </div>
  )
}

Post.propTypes = {
  pageContext: PropTypes.object,
}

export default Post