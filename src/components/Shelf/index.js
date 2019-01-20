import React from 'react'
import Book from '../Book'
import Card from '../Card'

import './shelf.css'

const Shelf = ({ title, books, onSelect }) => (
  <Card>
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
  </Card>
)

export default Shelf
