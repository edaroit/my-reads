import React from 'react'

import './tab-group.css'

export const TabGroupItem = ({ onClick, value, children }) => (
  <li onClick={() => onClick(value)} className="tab-group__item">
    {children}
  </li>
)

const TabGroup = ({ children }) => (
  <ul className="tab-group">
    {children}
  </ul>
)

export default TabGroup
