import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../css/baseLayout.scss';

export default class OneLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    return (
      <>
        {/* head custom 진행*/}
        <Helmet
          title="Gatsby for SSEON"
          meta={[
            { name: 'description', content: 'sseon theme' },
            { name: 'keywords', content: 'sseon, blog, theme' },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1'
            }
          ]}
        >
          {/* 한국어 설정 진행 */}
          <html lang="ko" />
        </Helmet>
        <div className="blog-main-container">{this.props.children}</div>
      </>
    );
  }
}
