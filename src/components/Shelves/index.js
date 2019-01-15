import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Shelf from '../Shelf'

const Shelves = ({ currentlyReading, wantToRead, read }) => (
  <div>
    <Shelf books={currentlyReading} />
    <Shelf books={wantToRead} />
    <Shelf books={read} />
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
