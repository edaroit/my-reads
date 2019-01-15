import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Shelf from '../Shelf'

const Shelves = ({
  currentlyReading, wantToRead, read, onSelect,
}) => (
  <div>
    <Shelf books={currentlyReading} onSelect={onSelect} />
    <Shelf books={wantToRead} onSelect={onSelect} />
    <Shelf books={read} onSelect={onSelect} />
    <Link to="/search">Search</Link>
  </div>
)

Shelves.propTypes = {
  currentlyReading: PropTypes.arrayOf(PropTypes.object),
  wantToRead: PropTypes.arrayOf(PropTypes.object),
  read: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
}

Shelves.defaultProps = {
  currentlyReading: [],
  wantToRead: [],
  read: [],
  onSelect: () => {},
}

export default Shelves
