import React from 'react'

import Title from '../Title'

import './book.css'

const Book = ({
  id, imageLinks, title, authors = [], shelf, onSelect,
}) => (
  <div className="book">
    <figure>
      <img src={imageLinks.thumbnail} alt="Book" />
    </figure>
    <div className="book-information__title">
      <Title as="h2" align="left">
        {title}
      </Title>
      <span className="book-information__authors">
        {authors.join(', ')}
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
