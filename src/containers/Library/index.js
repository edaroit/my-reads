import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import BookList from '../../components/BookList'
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

  booksFromShelf = () => {
    const { books, shelf } = this.state
    const filter = allBooks => selectedShelf => (
      allBooks.filter(book => book.shelf === selectedShelf)
    )
    const filterBy = filter(books)

    return filterBy(shelf)
  }

  render() {
    const { books, isLoading, shelf } = this.state
    const booksFromShelf = this.booksFromShelf()

    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <BookList
              books={booksFromShelf}
              isLoading={isLoading}
              onSelect={this.updateBook}
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
