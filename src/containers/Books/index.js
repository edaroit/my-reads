import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import BookList from '../../components/BookList'
import TabGroup, { TabGroupItem } from '../../components/TabGroup'

import './books.css'

class Books extends PureComponent {
  render() {
    const {
      books, shelf, isLoading, onUpdateBook, onUpdateShelf,
    } = this.props

    return (
      <div>
        <div>
          <TabGroup>
            <TabGroupItem
              onClick={onUpdateShelf}
              value="currentlyReading"
              selected={shelf === 'currentlyReading'}
            >
              Currently Reading
            </TabGroupItem>
            <TabGroupItem
              onClick={onUpdateShelf}
              value="wantToRead"
              selected={shelf === 'wantToRead'}
            >
              Want to Read
            </TabGroupItem>
            <TabGroupItem
              onClick={onUpdateShelf}
              value="read"
              selected={shelf === 'read'}
            >
              Read
            </TabGroupItem>
            <Link className="search-button" to="/search">
              Add a Book
            </Link>
          </TabGroup>
        </div>
        <BookList books={books} isLoading={isLoading} onSelect={onUpdateBook} />
      </div>
    )
  }
}

export default Books
