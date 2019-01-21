import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import BookList from '../../components/BookList'
import TabGroup, { TabGroupItem } from '../../components/TabGroup'

import './books.css'

class Books extends PureComponent {
  state = {
    categorySelected: 'wantToRead',
  }

  updateCategory = (categorySelected) => {
    this.setState({ categorySelected })
  }

  render() {
    const { categorySelected } = this.state
    const { books, onSelect } = this.props

    return (
      <div>
        <div>
          <TabGroup>
            <TabGroupItem onClick={this.updateCategory} value="currentlyReading">Currently Reading</TabGroupItem>
            <TabGroupItem onClick={this.updateCategory} value="wantToRead">Want to Read</TabGroupItem>
            <TabGroupItem onClick={this.updateCategory} value="read">Read</TabGroupItem>
            <Link className="search-button" to="/search">
              Add a Book
            </Link>
          </TabGroup>
        </div>
        <BookList title="" books={books[categorySelected]} onSelect={onSelect} />
      </div>
    )
  }
}

export default Books
