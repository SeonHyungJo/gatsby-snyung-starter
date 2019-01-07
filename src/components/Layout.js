import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from './Header';
import Button from './Button';

import "../css/prism-tomorrow.css";
import '../css/baseLayout.scss';

export default class Template extends React.Component {
  constructor() {
    super();

    this.state = {
      navList: [
        {
          path: "/main",
          name: "main",
        },
        {
          path: "/",
          name: "posts",
        },
        // {
        //   path: "/resume",
        //   name: "resume",
        // },
        {
          path: "/aboutme",
          name: "about me",
        }
      ]
    }
  }

  static propTypes = {
    children: PropTypes.func
  };

  render() {
    const { location } = this.props;
    const { navList } = this.state;
    return (
      <>
        {/* head custom 진행*/}
        <Helmet
          title="Gatsby for SSEON"
          meta={[
            { name: 'description', content: 'sseon theme' },
            { name: 'keywords', content: 'sseon, blog, theme' }
          ]}
        >
          {/* 한국어 설정 진행 */}
          <html lang="ko" />
        </Helmet>

        {/* ----------------------------------------------------- */}
        <Header location={location}>
          {navList.map((navItem) => {
            return (
              <Link to={navItem.path}>
                <Button>{navItem.name.toUpperCase()}</Button>
              </Link>
            )
          })}
        </Header>
        {/* ----------------------------------------------------- */}
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          {this.props.children}
        </div>

        {/* <SideBar>SideBar</SideBar> */}
      </>
    );
  }
}

export const pageQuery = graphql`
  query NavQuery {
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