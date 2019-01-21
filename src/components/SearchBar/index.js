import React from 'react'

import './search-bar.css'

const SearchBar = ({ onChange }) => (
  <input className="search-bar" onChange={onChange} placeholder="Search" />
)

export default SearchBar
