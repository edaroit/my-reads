import React from 'react'
import cn from 'classnames'

import './tab-group.css'

export const TabGroupItem = ({
  onClick, value, children, selected = false,
}) => (
  <li
    className={cn('tab-group__item', selected === true && 'tab-group__item--selected')}
    onClick={() => onClick(value)}
  >
    {children}
  </li>
)

const TabGroup = ({ children }) => (
  <ul className="tab-group">
    {children}
  </ul>
)

export default TabGroup
