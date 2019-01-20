import React from 'react'

import './book.css'

const Book = ({
  id, imageLinks, title, authors, shelf, onSelect,
}) => (
  <div className="book">
    <figure>
      <img src={imageLinks.thumbnail} alt="Book" />
    </figure>
    <div>
      <h2>
        {title}
      </h2>
      <span>
        {authors}
      </span>
      <select
        defaultValue={shelf}
        onChange={event => onSelect(id, event.target.value)}
      >
        <option value="none">None</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
      </select>
    </div>
  </div>
)

export default Book
