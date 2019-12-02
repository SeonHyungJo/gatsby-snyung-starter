import React from 'react'
import PropTypes from 'prop-types'
import TabItem from 'component/tab-item'

const TabContainer = ({ tabList }) =>
  tabList.map(item => <TabItem key={item.path} {...item} />)

TabContainer.propTypes = {
  tabList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  )
}

export default TabContainer
