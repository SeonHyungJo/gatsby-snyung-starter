import React from 'react';

import '../css/side-bar.scss';

/**
 * @description 사이드 Nav 구현
 */
const SideBar = ({ children = 'side bar', type = 'nav' }) => {
  return <div className={'SideBarContainer'}>{children}</div>;
};

export default SideBar;
