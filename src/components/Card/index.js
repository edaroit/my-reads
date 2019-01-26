import React from 'react'
import cn from 'classnames'

import './card.css'

const Card = ({ children, className }) => (
  <div className={cn('card', className && className)}>
    {children}
  </div>
)

export default Card
