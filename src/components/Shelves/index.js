import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from '../Shelf'

import './shelves.css'

const Shelves = ({
  currentlyReading, wantToRead, read, onSelect,
}) => (
  <div className="shelves">
    <Shelf books={currentlyReading} onSelect={onSelect} />
    <Shelf books={wantToRead} onSelect={onSelect} />
    <Shelf books={read} onSelect={onSelect} />
    <Link to="/search">Search</Link>
  </div>
)

export default Shelves
