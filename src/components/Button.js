import React from 'react';
import GatsbyLink from 'gatsby-link';

import { classNames } from '../util/commonUtil';

import '../css/button.scss';

/**
 * @description 상단 헤더 부분 Nav Button 구현
 */
const Button = ({ children = 'Button', type = 'nav', to = '' }) => {
  return (
    <>
      <GatsbyLink to={to}>
        <div
          className={
            type.toLowerCase() === 'nav'
              ? classNames(`defaultClass, buttonContainer`)
              : classNames(`defaultClass, ${type}`)
          }
        >
          {children}
        </div>
      </GatsbyLink>
    </>
  );
};

export default Button;
