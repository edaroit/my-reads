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

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = books.filter(book => book.shelf === 'wantToRead')
    const read = books.filter(book => book.shelf === 'read')
    this.setState({ books: { currentlyReading, wantToRead, read } })
  }

  addBook = async (bookId, shelf) => {
    const book = await BooksAPI.get(bookId)
    await BooksAPI.update(book, shelf)
    this.setState(currentState => ({
      books: {
        ...currentState.books,
        [shelf]: [...currentState.books[shelf], book],
      },
    }))
  }

  render() {
    const { books } = this.state

    return (
      <div>
        <Route
          exact
          path="/"
          render={() => <Shelves {...books} />}
        />
        <Route
          exact
          path="/search"
          render={({ history }) => (
            <Search
              onSelect={(bookId, shelf) => {
                this.addBook(bookId, shelf)
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
