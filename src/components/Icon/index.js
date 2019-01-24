import React from 'react'
import cn from 'classnames'

import './icon.css'

const Icon = ({ name }) => (
  <i className={cn('icon', `icon-${name}`)} />
)

export default Icon
