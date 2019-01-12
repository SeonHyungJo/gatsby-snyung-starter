import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import ReactDisqusComments from 'react-disqus-comments';

import Tags from '../components/Tags';
import Layout from '../components/Layout';
import Button from '../components/Button';

import '../css/post.scss';

export default function Template(props) {
  const { data } = props;
  const { html, excerpt, frontmatter } = data.markdownRemark;
  const { title, date, tags } = frontmatter;

  return (
    <Layout {...props}>
      <div className="blog-post-container">
        <Helmet
          title={`Sseon Blog - ${title}`}
          meta={[
            { name: 'description', content: `${excerpt}` },
            { name: 'keywords', content: `${tags}` },
          ]}
        />
        <article className="blog-post">

          {/* Title */}
          <h1 className="title">{title}</h1>

          {/* Date */}
          <h2 className="date">{date}</h2>

          {/* Back Button */}
          <div className="backBtn">
            <Button to={'/posts'}>{`Back`}</Button>
          </div>

          {/* Contents */}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Post Tags */}
          <Tags list={tags || []} />
        </article>
        {/* 댓글기능 추가 */}
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
      excerpt(pruneLength: 120)
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        path
        tags
        title
      }
    }
  }
`;
