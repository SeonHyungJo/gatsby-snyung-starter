import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import Helmet from 'react-helmet';
// import Header from './Header';
// import Button from './Button';
// import SideBar from './SideBar';

import '../css/typography.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    const { location } = this.props;
    const isRoot = location.pathname === '/';

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
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </div>

        {/* <SideBar>SideBar</SideBar> */}
      </>
    );
  }
}
