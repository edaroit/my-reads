import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../../BooksAPI'
import BookList from '../../components/BookList'
import SearchBar from '../../components/SearchBar'

class Search extends Component {
  state = {
    books: [],
  }

  searchBook = async ({ target }) => {
    const { value } = target
    const books = await BooksAPI.search(value)
    console.log(books)
    this.setState({ books })
  }

  render() {
    const { books } = this.state
    const { onSelect } = this.props

    return (
      <div>
        <SearchBar onChange={this.searchBook} />
        <BookList books={books} onSelect={onSelect} />
      </div>
    )
  }
}

Search.propTypes = {
  onSelect: PropTypes.func,
}

Search.defaultProps = {
  onSelect: () => {},
}

export default Search
