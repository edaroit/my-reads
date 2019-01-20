import React from 'react'

import './title.css'

const Title = ({ children, as: Tag = 'h1', align = 'center' }) => (
  <Tag className="title" style={{ textAlign: align }}>
    {children}
  </Tag>
)

export default Title
