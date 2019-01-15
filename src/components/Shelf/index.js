import React from 'react'
import PropTypes from 'prop-types'
import Book from '../Book'

const Shelf = ({ books, onSelect }) => (
  <div>
    {
      books.map(book => (<Book key={book.id} {...book} onSelect={onSelect} />))
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
