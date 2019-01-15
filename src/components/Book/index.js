import React from 'react'
import PropTypes from 'prop-types'

import './book.css'

const Book = ({
  id, imageLinks, title, authors, shelf, onSelect,
}) => (
  <div className="book">
    <figure>
      <img src={imageLinks.thumbnail} alt="Book" />
    </figure>
    <div>
      <h2>
        {title}
      </h2>
      <span>
        {authors}
      </span>
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
  </div>
)

Book.propTypes = {
  id: PropTypes.string,
  imageLinks: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.string),
  shelf: PropTypes.string,
  onSelect: PropTypes.func,
}

Book.defaultProps = {
  id: null,
  imageLinks: null,
  title: null,
  authors: [],
  shelf: null,
  onSelect: () => {},
}

export default Book
