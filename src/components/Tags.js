import React from 'react';
import GatsbyLink from 'gatsby-link';

import '../css/tag.scss';

export default function Tags({ list = [] }) {
  return (
    <div className="tagContainer">
      {list.map(tag => {
        return (
          <GatsbyLink to={`/tags/${tag}`}>
            <span className="tag" >{tag}</span>
          </GatsbyLink>
        )
      })
      }
    </div>
  );
}
