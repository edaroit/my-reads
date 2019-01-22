import React from 'react'
import cn from 'classnames'

import './search-bar.css'

const SearchBar = ({ className, onChange }) => (
  <input
    className={cn('search-bar', className && className)}
    onChange={onChange}
    placeholder="Search"
  />
)

export default SearchBar
