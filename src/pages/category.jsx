import React from 'react'
import GatsbyLink from 'gatsby-link'
import { FaHome } from 'react-icons/fa'
import PropTypes from 'prop-types'

import { Layout } from 'layout'
import { CategoryCard } from 'component/category-card'
import { LinkButton } from 'component/button'

import 'style/posts.scss'
import 'style/post.scss'

function Tags({ posts = {}, post = [], tag = '' }) {
  return (
    <>
      {/* <h1>Tags</h1> */}
      <div className="category-body">
        <div className="category-list">
          {Object.keys(posts).map(tagName => (
            <CategoryCard
              key={`${tagName}_${posts[tagName].length}`}
              tagName={tagName}
              count={posts[tagName].length}
            />
          ))}
        </div>
      </div>
      {tag && (
        <div className="blog-posts">
          <CategoryCard tagName={tag} count={post.length} />
          {post.map(({ id, frontmatter, excerpt }) => {
            return (
              <div className="blog-post-preview" key={id}>
                <div className="blog-container">
                  <p className="title">
                    <GatsbyLink
                      key={`${id}_${frontmatter.title}`}
                      to={frontmatter.path}
                    >
                      {frontmatter.title}
                    </GatsbyLink>
                  </p>
                </div>
                <div className="blog-container">
                  <div className="blog-sub-container">
                    <p className="summary">{excerpt}</p>
                    <div className="tagContainer">
                      {frontmatter.tags.map(tag => {
                        return (
                          <GatsbyLink
                            key={`${id}_${tag}`}
                            to={`/category/${tag}`}
                          >
                            <span className="tag">{tag}</span>
                          </GatsbyLink>
                        )
                      })}
                    </div>
                  </div>
                  <div
                    className="blog-sub-container"
                    style={{ width: '0px' }}
                  />
                </div>
              </div>
            )
          })}
          <LinkButton to="/posts" customClass={'moveLink'}>
            <FaHome /> All posts
          </LinkButton>
        </div>
      )}
    </>
  )
}

Tags.propTypes = {
  posts: PropTypes.object,
  post: PropTypes.array,
  tag: PropTypes.string,
}

const TagsTemplate = props => {
  const { pageContext } = props

  return (
    <Layout {...props}>
      <Tags {...pageContext} />
    </Layout>
  )
}

TagsTemplate.propTypes = {
  pageContext: PropTypes.any,
}

export default TagsTemplate
