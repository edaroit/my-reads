import React from 'react'
import Book from '../Book'

import './shelf.css'

const Shelf = ({ title, books, onSelect }) => (
  <div className="shelf">
    <h1 className="shelf__title">
      {title}
    </h1>
    <div className="shelf__books">
      {
        books.map(book => (<Book key={book.id} {...book} onSelect={onSelect} />))
      }
    </div>
  </div>
)

export default Shelf
