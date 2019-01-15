import React from 'react'
import PropTypes from 'prop-types'

const Book = ({
  id, title, authors, shelf, onSelect,
}) => (
  <div>
    {title}
    {authors}
    <select
      defaultValue={shelf}
      onChange={event => onSelect(id, event.target.value)}
    >
      <option value="none">None</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
    </select>
  </div>
)

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.string),
  shelf: PropTypes.string,
  onSelect: PropTypes.func,
}

Book.defaultProps = {
  id: null,
  title: null,
  authors: [],
  shelf: null,
  onSelect: () => {},
}

export default Book
