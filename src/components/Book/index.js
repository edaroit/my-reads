import React from 'react'

import ButtonGroup, { ButtonGroupItem } from '../ButtonGroup'
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
      <ButtonGroup>
        <ButtonGroupItem selected={shelf === 'none'} onClick={() => onSelect(id, 'none')}>
          None
        </ButtonGroupItem>
        <ButtonGroupItem selected={shelf === 'currentlyReading'} onClick={() => onSelect(id, 'currentlyReading')}>
          Currently Reading
        </ButtonGroupItem>
        <ButtonGroupItem selected={shelf === 'wantToRead'} onClick={() => onSelect(id, 'wantToRead')}>
          Want to Read
        </ButtonGroupItem>
        <ButtonGroupItem selected={shelf === 'read'} onClick={() => onSelect(id, 'read')}>
          Read
        </ButtonGroupItem>
      </ButtonGroup>
    </div>
  </div>
)

export default Book
