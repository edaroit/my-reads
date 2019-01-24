import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Books from '../../components/Books'
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

    this.setState({
      books,
      isLoading: false,
    })
  }

  booksFrom = (shelf) => {
    const { books } = this.state
    const filter = allBooks => selectedShelf => (
      allBooks.filter(book => book.shelf === selectedShelf)
    )
    const filterBy = filter(books)

    return filterBy(shelf)
  }

  updateBook = (book, shelf) => {
    const updatedShelf = shelf === 'none' ? 'currentlyReading' : shelf

    this.setState({ isLoading: true, shelf: updatedShelf }, async () => {
      await BooksAPI.update(book, shelf)
      const updatedBook = {
        ...book,
        shelf,
      }

      this.setState(currentState => ({
        books: currentState.books.filter(b => b.id !== updatedBook.id).concat(updatedBook),
        isLoading: false,
      }))
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
    const booksFromShelf = this.booksFrom(shelf)

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
