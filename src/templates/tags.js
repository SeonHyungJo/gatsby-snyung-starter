import React from 'react'
import GatsbyLink from 'gatsby-link'
import HomeIcon from 'react-icons/lib/fa/home'

import Layout from '../components/Layout'
import Link from '../components/Link'
import Category from '../components/Category'

import '../css/posts.scss'
import '../css/post.scss'

function Tags({ posts, post, tag }) {
  return (
    <div>
      <h1>Tags</h1>
      <div className='tags'>
        <div className='category-list'>
          {Object.keys(posts).map(tagName => (
            <Category key={`${tagName}_${posts[tagName].length}`} tagName={tagName} count={posts[tagName].length} />
          ))}
        </div>
      </div>
      {tag && (
        <div className='blog-posts'>
          <Category tagName={tag} count={post.length} />
          {post.map(({ id, frontmatter, excerpt }) => {
            return (
              <div className='blog-post-preview' key={id}>
                <div className='blog-container'>
                  <p className='title'>
                    <GatsbyLink key={`${id}_${frontmatter.title}`} to={frontmatter.path}>
                      {frontmatter.title}
                    </GatsbyLink>
                  </p>
                </div>
                <div className='blog-container'>
                  <div className='blog-sub-container'>
                    <p className='summary'>
                      {excerpt}
                    </p>
                    <div className='tagContainer'>
                      {frontmatter.tags.map(tag => {
                        return (
                          <GatsbyLink key={`${id}_${tag}`} to={`/tags/${tag}`}>
                            <span className='tag'>{tag}</span>
                          </GatsbyLink>
                        )
                      })}
                    </div>
                  </div>
                  <div className='blog-sub-container' style={{ width: '0px' }}>
                  </div>
                </div>
              </div>
            )
          })}
          <Link to='/posts' className={'moveLink'}>
            <HomeIcon /> All posts
         </Link>
        </div>
      )}
    </div>
  )
}

export default function TagsTemplate(props) {
  const { pageContext } = props
  return (
    <Layout {...props}>
      <Tags {...pageContext} />
    </Layout>
  )
}
