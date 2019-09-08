import React from 'react'
import PropTypes from 'prop-types'
import TabItem from 'component/tab-item'

const TabContainer = ({ tabList = [] }) =>
  tabList.map((item) =>
    <TabItem
      {...item}
    />
  )

TabContainer.propTypes = {
  tabList: PropTypes.array.isRequired
}

export default TabContainer;