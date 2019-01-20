import React, { Component } from 'react'
import * as BooksAPI from '../../BooksAPI'
import Shelf from '../../components/Shelf'
import SearchBar from '../../components/SearchBar'

class Search extends Component {
  state = {
    books: [],
  }

  searchBook = async ({ target }) => {
    const { value } = target
    const books = await BooksAPI.search(value)
    this.setState({ books })
  }

  render() {
    const { books } = this.state
    const { onSelect } = this.props

    return (
      <div>
        <SearchBar onChange={this.searchBook} />
        <Shelf books={books} onSelect={onSelect} />
      </div>
    )
  }
}

export default Search
