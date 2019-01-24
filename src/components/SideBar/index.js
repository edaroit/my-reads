import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import Icon from '../Icon'

import './side-bar.css'

const SideBar = ({ onClick, shelf }) => (
  <aside className="side-bar">
    <div className="side-bar__logo">
      <Icon name="logo" fontSize={10} unit="rem" />
    </div>
    <div className="side-bar__action">
      <Link className="side-bar__button" to="/search">
        <Icon name="add" />
        Add a Book
      </Link>
    </div>
    <div>
      <span
        className={cn('side-bar__item', shelf === 'currentlyReading' && 'side-bar__item--selected')}
        onClick={() => onClick('currentlyReading')}
      >
        <Icon name="book" />
        Currently Reading
      </span>
      <span
        className={cn('side-bar__item', shelf === 'wantToRead' && 'side-bar__item--selected')}
        onClick={() => onClick('wantToRead')}
      >
        <Icon name="heart" />
        Want to Read
      </span>
      <span
        className={cn('side-bar__item', shelf === 'read' && 'side-bar__item--selected')}
        onClick={() => onClick('read')}
      >
        <Icon name="archive" />
        Read
      </span>
    </div>
  </aside>
)

export default SideBar
