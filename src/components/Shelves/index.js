import React from 'react'

import BookList from '../BookList'
import Loader from '../Loader'
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
    {
      isLoading
        ? <Loader />
        : <BookList books={booksFromShelf(books, shelf)} onSelect={onBookSelect} hasEmptyState />
    }
  </div>
)

export default Shelves
