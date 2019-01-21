import React from 'react'

import Book from '../Book'
import Card from '../Card'
import Title from '../Title'

import './book-list.css'

const BookList = ({ title, books, onSelect }) => (
  <Card>
    <Title>
      {title}
    </Title>
    <div className="book-list">
      {
        books.map(book => (<Book key={book.id} {...book} onSelect={onSelect} />))
      }
    </div>
  </Card>
)

export default BookList
