import React from 'react'

import BookList from '../BookList'
import SideBar from '../SideBar'

import './shelves.css'

const booksFromShelf = (books, shelf) => {
  const filter = allBooks => selectedShelf => (
    allBooks.filter(book => book.shelf === selectedShelf)
  )
  const filterBy = filter(books)

  return filterBy(shelf)
}

const Shelves = ({
  books, shelf, isLoading, onShelfSelect, onBookSelect,
}) => (
  <div className="shelves">
    <SideBar shelf={shelf} onClick={onShelfSelect} />
    <BookList books={booksFromShelf(books, shelf)} isLoading={isLoading} onSelect={onBookSelect} />
  </div>
)

export default Shelves
