import React, { Component } from 'react'
import * as BooksAPI from '../../BooksAPI'
import BookList from '../../components/BookList'
import SearchBar from '../../components/SearchBar'

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
        <SearchBar onChange={this.searchBook} />
        <BookList books={books} onSelect={onSelect} />
      </div>
    )
  }
}

export default AddBook
