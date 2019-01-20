import React from 'react'
import Book from '../Book'

import './shelf.css'

const Shelf = ({ books, onSelect }) => (
  <div className="shelf">
    <div className="shelf__books">
      {
        books.map(book => (<Book key={book.id} {...book} onSelect={onSelect} />))
      }
    </div>
  </div>
)

export default Shelf
