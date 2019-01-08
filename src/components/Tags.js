import React from 'react';
import GatsbyLink from 'gatsby-link';

import '../css/tag.scss';

export default function Tags({ list = [] }) {
  return (
    <div className="tagContainer">
      {list.map((tag, index) => {
        return (
          <GatsbyLink key={`${index}_${tag}`} to={`/tags/${tag}`}>
            <span className="tag">{tag}</span>
          </GatsbyLink>
        );
      })}
    </div>
  );
}
