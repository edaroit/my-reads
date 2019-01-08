import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookList from '../BookList'

const Shelves = ({ currentlyReading, wantToRead, read }) => (
  <div>
    <BookList books={currentlyReading} />
    <BookList books={wantToRead} />
    <BookList books={read} />
    <Link to="/search">Search</Link>
  </div>
)

Shelves.propTypes = {
  currentlyReading: PropTypes.arrayOf(PropTypes.object),
  wantToRead: PropTypes.arrayOf(PropTypes.object),
  read: PropTypes.arrayOf(PropTypes.object),
}

Shelves.defaultProps = {
  currentlyReading: [],
  wantToRead: [],
  read: [],
}

export default Shelves
