import React from 'react'
import TabItem from 'component/tab-item'

import './index.scss'

const TabContainer = ({ tabList }) =>
  tabList.map((item) =>
    <TabItem
      {...item}
    />
  )

export default TabContainer;