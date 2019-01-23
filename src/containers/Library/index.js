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
    shelf: null,
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = async (shelf = 'currentlyReading') => {
    const books = await BooksAPI.getAll()
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = books.filter(book => book.shelf === 'wantToRead')
    const read = books.filter(book => book.shelf === 'read')
    this.setState({
      books: { currentlyReading, wantToRead, read },
      isLoading: false,
      shelf,
    })
  }

  updateBook = (bookId, shelf) => {
    this.setState({ isLoading: true }, async () => {
      const book = await BooksAPI.get(bookId)
      await BooksAPI.update(book, shelf)
      this.fetchBooks(shelf)
    })
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
