import React from 'react';
import { graphql } from 'gatsby';

import Link from '../components/Link';
import Layout from '../components/DLayout';
import Button from '../components/Button';

import { FaGithub, FaFacebook, FaYoutube} from "react-icons/lib/fa";
import { IoEmail } from "react-icons/lib/io";

import '../css/main.scss';

export default function Index(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout {...props}>
      <div className="bContainer">
        <div className="bCard">
          <div className="img">
            <Link to="/">
              <img className="img-circle" src="https://avatars2.githubusercontent.com/u/24274424?s=460&v=4" alt="MainImge" />
            </Link>
          </div>
          <div className="name">Dev_sseon</div>
          <div className="title">자바스크립트 개발자가 되려고 하는 비전공자</div>
          <div className="sns">
            <Button type={'snsBtn'}><IoEmail size="1.5rem" /></Button>
            <Button type={'snsBtn'}><FaGithub size="1.5rem" /></Button>
            <Button type={'snsBtn'}><FaFacebook size="1.5rem"/></Button>
            <Button type={'snsBtn'}><FaYoutube size="1.5rem"/></Button>
          </div>
          <div className="menu">
            <Link to="/">
              All Post
            </Link>
            <Link to="/resume">
              Resume
            </Link>
            <Link to="/project">
              Project
            </Link></div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MainQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
