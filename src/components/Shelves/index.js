import React from 'react'

import BookList from '../BookList'
import SideBar from '../SideBar'

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
  <div>
    <SideBar shelf={shelf} onClick={onShelfSelect} />
    <BookList books={booksFromShelf(books, shelf)} isLoading={isLoading} onSelect={onBookSelect} />
  </div>
)

export default Shelves
