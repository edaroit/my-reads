import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from '../Shelf'

import './shelves.css'

const Shelves = ({
  currentlyReading, wantToRead, read, onSelect,
}) => (
  <div className="shelves">
    <Link className="search" to="/search">
      Add a Book
    </Link>
    <Shelf title="Currently Reading" books={currentlyReading} onSelect={onSelect} />
    <Shelf title="Want to Read" books={wantToRead} onSelect={onSelect} />
    <Shelf title="Read" books={read} onSelect={onSelect} />
  </div>
)

export default Shelves
