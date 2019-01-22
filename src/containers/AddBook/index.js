import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BookList from '../../components/BookList'
import SearchBar from '../../components/SearchBar'

import * as BooksAPI from '../../BooksAPI'

import './add-book.css'

class AddBook extends Component {
  state = {
    books: [],
  }

  searchBook = async ({ target }) => {
    const { value } = target
    const books = await BooksAPI.search(value)
    if (books == null || books.error) {
      this.setState({ books: [] })
      return
    }
    this.setState({ books })
  }

  render() {
    const { books } = this.state
    const { onSelect } = this.props

    return (
      <div className="add-book">
        <div className="add-book-header">
          <Link className="add-book-header__back-button" to="/">
            Back
          </Link>
          <SearchBar className="add-book-header__search-bar" onChange={this.searchBook} />
        </div>
        <BookList books={books} onSelect={onSelect} />
      </div>
    )
  }
}

export default AddBook
