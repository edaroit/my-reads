import React from 'react'
import cn from 'classnames'

import './title.css'

const Title = ({
  children, as: Tag = 'h1', className, align = 'center',
}) => (
  <Tag className={cn('title', className && className)} style={{ textAlign: align }}>
    {children}
  </Tag>
)

export default Title
