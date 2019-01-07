import React from 'react'
import Helmet from 'react-helmet'
import BackIcon from 'react-icons/lib/fa/chevron-left'
import ForwardIcon from 'react-icons/lib/fa/chevron-right'
import { graphql } from 'gatsby'
import ReactDisqusComments from 'react-disqus-comments';

import Link from '../components/Link'
import Tags from '../components/Tags'
import Layout from '../components/Layout'
import Button from '../components/Button';

import '../css/blog-post.scss'

export default function Template (props) {
  const { data, pageContext } = props
  const { markdownRemark: post } = data
  const { next, prev } = pageContext

  return (
    <Layout {...props}>
      {/* Layout을 기준으로 이 아래는 child이다. */}
      <div className='blog-post-container'>
        {/* Helmet을 사용해서 title부분이 유기적으로 바뀌도록 구성되어있음 */}
        {/* 설명부분은 고정이 되어야하는 건가? */}
        {/* keyword도 고정이 되어야하는 건가? */}
        <Helmet title={`Sseon Blog - ${post.frontmatter.title}`} />
        <article className='blog-post'>
          {/* Title */}
          <h1 className='title'>{post.frontmatter.title}</h1>
          {/* Date */}
          <h2 className='date'>{post.frontmatter.date}</h2>
          <div className="backBtn"> 
            <Button to={'/'}>{`뒤로가기`}</Button>
          </div>
          {/* Contents */}
          {/* html을 그냥 때려 박네 */}
          <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: post.html }} />
          {/* Post Tags */}
          <Tags list={post.frontmatter.tags || []} />

          {/* 하위에 위치한 이동 버튼 */}
          {/* 이 아래는 커스텀을 하는 게 좋을듯 함 */}
          {/* <div className='navigation'>
            {prev &&
             <Link className='link prev' to={prev.frontmatter.path}>
             <BackIcon />
             {prev.frontmatter.title}
             </Link>}
            {next &&
             <Link className='link next' to={next.frontmatter.path}>
             {next.frontmatter.title}
             <ForwardIcon />
             </Link>}
          </div> */}
        </article>
        <ReactDisqusComments
        shortname="test-nfwgyasf7u"
        identifier="something-unique-12345"
        title="Example Thread"
        url="http://seonhyung.jo@github.io"
        category_id="123456"
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`
