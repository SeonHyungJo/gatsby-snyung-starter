import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../css/typography.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';

    return (
      <>
        {/* head custom 진행*/}
        <Helmet
          title="Sseon's blog"
          meta={[
            { name: 'description', content: '간단하게 설명을 적어봅시다.' },
            { name: 'keywords', content: 'sseon, blog, theme' },
          ]}
        >
        {/* 한국어 설정 진행 */}
        <html lang="ko" />
        </Helmet>
        <div
          style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: isRoot ? `1.45rem 1.0875rem` : `1rem 0.75rem`,
            }}
          >
            <h1 style={{ margin: 0, fontSize: isRoot ? `2.5rem` : `2rem` }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Blog Header
              </Link>
            </h1>
          </div>
        </div>
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
      </>
    );
  }
}
