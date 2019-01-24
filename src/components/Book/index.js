import React from 'react'

import ButtonGroup, { ButtonGroupItem } from '../ButtonGroup'
import Title from '../Title'

import './book.css'

const Book = ({ book, onSelect }) => {
  const {
    imageLinks = null, title = '', authors = [], shelf = 'none',
  } = book

  return (
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
        <ButtonGroup className="book-information__button-group">
          <ButtonGroupItem selected={shelf === 'none'} onClick={() => onSelect(book, 'none')}>
            None
          </ButtonGroupItem>
          <ButtonGroupItem selected={shelf === 'currentlyReading'} onClick={() => onSelect(book, 'currentlyReading')}>
            Currently Reading
          </ButtonGroupItem>
          <ButtonGroupItem selected={shelf === 'wantToRead'} onClick={() => onSelect(book, 'wantToRead')}>
            Want to Read
          </ButtonGroupItem>
          <ButtonGroupItem selected={shelf === 'read'} onClick={() => onSelect(book, 'read')}>
            Read
          </ButtonGroupItem>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Book
