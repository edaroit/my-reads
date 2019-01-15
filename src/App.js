import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelves from './components/Shelves'
import Search from './containers/Search'

class App extends Component {
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

    return (
      <div>
        <Route
          exact
          path="/"
          render={() => <Shelves {...books} onSelect={this.updateBook} />}
        />
        <Route
          exact
          path="/search"
          render={({ history }) => (
            <Search
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

export default App
