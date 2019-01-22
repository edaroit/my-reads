import React from 'react'

import Title from '../Title'

import './book.css'

const Book = ({
  id = null, imageLinks = null, title = '', authors = [], shelf = 'none', onSelect = () => {},
}) => (
  <div className="book">
    <figure>
      {
        imageLinks && <img src={imageLinks.thumbnail} alt="Book" />
      }
    </figure>
    <div className="book-information">
      <Title as="h2" className="book-information__title" align="left">
        {title}
      </Title>
      <span className="book-information__authors">
        {authors.join(', ')}
      </span>
      <select
        className="book-information__select"
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
