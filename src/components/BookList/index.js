import React from 'react'

import Book from '../Book'
import Card from '../Card'
import Loader from '../Loader'

import './book-list.css'

const BookList = ({ books, isLoading, onSelect }) => (
  <Card>
    <div className="book-list">
      {
        isLoading
          ? <Loader />
          : books.map(book => (<Book key={book.id} book={book} onSelect={onSelect} />))
      }
    </div>
  </Card>
)

export default BookList
