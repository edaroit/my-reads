import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Shelves from '../../components/Shelves'
import AddBook from '../AddBook'

import * as BooksAPI from '../../BooksAPI'

class Library extends Component {
  state = {
    books: [],
    isLoading: true,
    shelf: 'currentlyReading',
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = async () => {
    const books = await BooksAPI.getAll()

    this.setState({ books, isLoading: false })
  }

  updateBook = async (book, shelf) => {
    this.setState(currentState => ({
      isLoading: true,
      shelf: shelf === 'none' ? currentState.shelf : shelf,
    }))

    await BooksAPI.update(book, shelf)
    const updatedBook = {
      ...book,
      shelf,
    }

    this.setState(currentState => ({
      books: currentState.books.filter(b => b.id !== updatedBook.id).concat(updatedBook),
      isLoading: false,
    }))
  }

  updateShelf = (shelf) => {
    this.setState({ shelf, isLoading: true })
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 500)
  }

  render() {
    const { books, isLoading, shelf } = this.state

    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <Shelves
              books={books}
              shelf={shelf}
              isLoading={isLoading}
              onBookSelect={this.updateBook}
              onShelfSelect={this.updateShelf}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={({ history }) => (
            <AddBook
              addedBooks={books}
              onSelect={(book, shelfSelected) => {
                this.updateBook(book, shelfSelected)
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
