import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({ onChange }) => (
  <input onChange={onChange} placeholder="Search" />
)

SearchBar.propTypes = {
  onChange: PropTypes.func,
}

SearchBar.defaultProps = {
  onChange: () => {},
}

export default SearchBar
