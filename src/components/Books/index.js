import React from 'react'
import { Link } from 'react-router-dom'

import BookList from '../BookList'
import TabGroup, { TabGroupItem } from '../TabGroup'

import './books.css'

const booksFrom = (books, shelf) => {
  const filter = allBooks => selectedShelf => (
    allBooks.filter(book => book.shelf === selectedShelf)
  )
  const filterBy = filter(books)

  return filterBy(shelf)
}

const Books = ({
  books, shelf, isLoading, onUpdateBook, onUpdateShelf,
}) => {
  const booksFromShelf = booksFrom(books, shelf)

  return (
    <div>
      <div>
        <TabGroup>
          <TabGroupItem
            onClick={onUpdateShelf}
            value="currentlyReading"
            selected={shelf === 'currentlyReading'}
          >
            Currently Reading
          </TabGroupItem>
          <TabGroupItem
            onClick={onUpdateShelf}
            value="wantToRead"
            selected={shelf === 'wantToRead'}
          >
            Want to Read
          </TabGroupItem>
          <TabGroupItem
            onClick={onUpdateShelf}
            value="read"
            selected={shelf === 'read'}
          >
            Read
          </TabGroupItem>
          <Link className="search-button" to="/search">
            Add a Book
          </Link>
        </TabGroup>
      </div>
      <BookList books={booksFromShelf} isLoading={isLoading} onSelect={onUpdateBook} />
    </div>
  )
}

export default Books
