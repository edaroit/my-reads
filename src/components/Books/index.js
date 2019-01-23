import React from 'react'
import { Link } from 'react-router-dom'

import BookList from '../BookList'
import TabGroup, { TabGroupItem } from '../TabGroup'

import './books.css'

const Books = ({
  books, shelf, isLoading, onUpdateBook, onUpdateShelf,
}) => (
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
    <BookList books={books} isLoading={isLoading} onSelect={onUpdateBook} />
  </div>
)

export default Books
