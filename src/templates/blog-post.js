import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { DiscussionEmbed } from "disqus-react";

import Tags from '../components/Tags';
import Layout from '../components/Layout';
import Button from '../components/Button';

import '../css/post.scss';

export default function Template(props) {
  const { data } = props;
  const { html, excerpt, frontmatter } = data.markdownRemark;
  const { title, date, tags } = frontmatter;

  
  // Disqus config
  const post = props.data.markdownRemark;
  //const siteTitle = get(this.props, "data.site.siteMetadata.title");
  const disqusShortname = "sseonblogtest";
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title,
  };

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
        <article className="blog-post-comment">
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
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
