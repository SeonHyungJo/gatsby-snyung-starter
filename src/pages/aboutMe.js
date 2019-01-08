import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Button from '../components/Button';
import Tags from '../components/Tags';
import Layout from '../components/Layout';

import '../css/post.scss';

export default function AboutMe(props) {
  const { data } = props;
  const { html, id, frontmatter } = data.markdownRemark;
  const { title, date, tags } = frontmatter;

  return (
    <Layout {...props}>
      <div key={id} className="blog-post-container">
        {/* AboutMe Head */}
        <Helmet title={`Blog - ${title}`} />
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
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query AboutmeQuery {
    markdownRemark(frontmatter: { path: { eq: "/aboutme" } }) {
      id
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
