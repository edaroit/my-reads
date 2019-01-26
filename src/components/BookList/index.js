import React from 'react'

import Book from '../Book'
import EmptyState from '../EmptyState'

import './book-list.css'

const BookList = ({ books, onSelect }) => {
  const hasBooks = books.length > 0

  return (
    <div className="book-list">
      {
        hasBooks
          ? books.map(book => (<Book key={book.id} book={book} onSelect={onSelect} />))
          : <EmptyState />
      }
    </div>
  )
}

export default BookList
