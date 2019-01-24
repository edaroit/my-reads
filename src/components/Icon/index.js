import React from 'react'
import cn from 'classnames'

import './icon.css'

const Icon = ({ name, fontSize, unit }) => (
  <i
    className={cn('icon', `icon-${name}`)}
    style={{ fontSize: fontSize && `${fontSize}${unit}` }}
  />
)

export default Icon
