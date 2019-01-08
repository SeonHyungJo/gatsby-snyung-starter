import React from 'react';
import GatsbyLink from 'gatsby-link';

import '../css/link.scss';

export default function Link({ children, className, to }) {
  return (
    <GatsbyLink
      key={`key_${children}`}
      className={[`link`].concat(className || []).join(' ')}
      to={to}
    >
      {children}
    </GatsbyLink>
  );
}
