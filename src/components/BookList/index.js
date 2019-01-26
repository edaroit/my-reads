import React from 'react'

import Book from '../Book'
import EmptyState from '../EmptyState'
import Loader from '../Loader'

import './book-list.css'

const BookList = ({ books, isLoading, onSelect }) => {
  if (isLoading) return <Loader />
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
