import React from 'react'
import cn from 'classnames'

import './button-group.css'

export const ButtonGroupItem = ({ selected, onClick, children }) => (
  <div
    className={cn('button-group__item', selected && 'button-group__item--selected')}
    onClick={onClick}
  >
    {children}
  </div>
)

const ButtonGroup = ({ children }) => (
  <div className="button-group">
    {children}
  </div>
)

export default ButtonGroup
