import React from 'react'

import Book from '../Book'
import Loader from '../Loader'

import './book-list.css'

const BookList = ({ books, isLoading, onSelect }) => (
  <div className="book-list">
    {
      isLoading
        ? <Loader />
        : books.map(book => (<Book key={book.id} book={book} onSelect={onSelect} />))
    }
  </div>
)

export default BookList
