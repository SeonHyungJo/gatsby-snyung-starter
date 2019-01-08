import React from 'react';
import Helmet from 'react-helmet';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import ForwardIcon from 'react-icons/lib/fa/chevron-right';
import { graphql } from 'gatsby';
import ReactDisqusComments from 'react-disqus-comments';

import Link from '../components/Link';
import Tags from '../components/Tags';
import Layout from '../components/Layout';
import Button from '../components/Button';

import '../css/post.scss';

export default function Template(props) {
  const { data, pageContext } = props;
  const { html, id, frontmatter } = data.markdownRemark;
  const { title, date, tags } = frontmatter;
  const { next, prev } = pageContext;

  return (
    <Layout {...props}>
      <div className="blog-post-container">
        <Helmet title={`Sseon Blog - ${title}`} />
        <article className="blog-post">
          {/* Title */}
          <h1 className="title">{title}</h1>
          {/* Date */}
          <h2 className="date">{date}</h2>
          <div className="backBtn">
            <Button to={'/posts'}>{`Back`}</Button>
          </div>
          {/* Contents */}
          {/* html을 그냥 때려 박네 */}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {/* Post Tags */}
          <Tags list={tags || []} />

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
          shortname="sseonBlogTEST.disqus.com"
          identifier="something-unique-12345"
          title="Example Thread"
          url="http://seonhyung.jo@github.io"
          category_id="123456"
        />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        path
        tags
        title
      }
    }
  }
`;
