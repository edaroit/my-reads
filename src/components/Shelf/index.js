import React from 'react'
import PropTypes from 'prop-types'
import Book from '../Book'

const Shelf = ({ books, onSelect }) => (
  <div>
    {
      books.map(book => (
        <div key={book.id}>
          <Book {...book} />
          <select defaultValue="none" onChange={event => onSelect(book.id, event.target.value)}>
            <option value="none">None</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
          </select>
        </div>
      ))
    }
  </div>
)

Shelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
}

Shelf.defaultProps = {
  books: [],
  onSelect: () => {},
}

export default Shelf
