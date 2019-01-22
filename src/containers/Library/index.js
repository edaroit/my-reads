import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Books from '../Books'
import AddBook from '../AddBook'

import * as BooksAPI from '../../BooksAPI'

class Library extends Component {
  state = {
    books: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    },
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = async () => {
    const books = await BooksAPI.getAll()
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = books.filter(book => book.shelf === 'wantToRead')
    const read = books.filter(book => book.shelf === 'read')
    this.setState({ books: { currentlyReading, wantToRead, read } })
  }

  updateBook = async (bookId, shelf) => {
    const book = await BooksAPI.get(bookId)
    await BooksAPI.update(book, shelf)
    this.fetchBooks()
  }

  render() {
    const { books } = this.state
    const addedBooks = [...books.currentlyReading, ...books.wantToRead, ...books.read]

    return (
      <div>
        <Route
          exact
          path="/"
          render={() => <Books books={books} onSelect={this.updateBook} />}
        />
        <Route
          exact
          path="/search"
          render={({ history }) => (
            <AddBook
              addedBooks={addedBooks}
              onSelect={(bookId, shelf) => {
                this.updateBook(bookId, shelf)
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
