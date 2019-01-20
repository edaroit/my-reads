import React from 'react'
import Book from '../Book'

import './shelf.css'

const Shelf = ({ books, onSelect }) => (
  <div className="shelf">
    {
      books.map(book => (<Book key={book.id} {...book} onSelect={onSelect} />))
    }
  </div>
)

export default Shelf
