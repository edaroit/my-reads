import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Books from '../../components/Books'
import AddBook from '../AddBook'

import * as BooksAPI from '../../BooksAPI'

class Library extends Component {
  state = {
    books: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    },
    isLoading: true,
    shelf: 'currentlyReading',
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = async () => {
    const books = await BooksAPI.getAll()
    const filter = allBooks => shelf => allBooks.filter(book => book.shelf === shelf)
    const filterBy = filter(books)
    const currentlyReading = filterBy('currentlyReading')
    const wantToRead = filterBy('wantToRead')
    const read = filterBy('read')

    this.setState({
      books: { currentlyReading, wantToRead, read },
      isLoading: false,
    })
  }

  updateBook = async (bookId, shelf) => {
    this.setState({ shelf, isLoading: true })
    const book = await BooksAPI.get(bookId)
    await BooksAPI.update(book)
    this.fetchBooks(shelf)
  }

  updateShelf = (shelf) => {
    this.setState({ shelf, isLoading: true })
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 500)
  }

  render() {
    const { books, isLoading, shelf } = this.state
    const booksFromShelf = books[shelf]
    const addedBooks = [...books.currentlyReading, ...books.wantToRead, ...books.read]

    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <Books
              books={booksFromShelf}
              shelf={shelf}
              isLoading={isLoading}
              onUpdateBook={this.updateBook}
              onUpdateShelf={this.updateShelf}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={({ history }) => (
            <AddBook
              addedBooks={addedBooks}
              onSelect={(bookId, shelfSelected) => {
                this.updateBook(bookId, shelfSelected)
                history.push('/')
              }}
            />
          )}
        />
      </div>
    )
  }
}

export default Library
