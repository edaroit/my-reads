import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import './side-bar.css'

const SideBar = ({ onClick, shelf }) => (
  <aside className="side-bar">
    <Link className="side-bar__button" to="/search">
      Add a Book
    </Link>
    <span
      className={cn('side-bar__item', shelf === 'currentlyReading' && 'side-bar__item--selected')}
      onClick={() => onClick('currentlyReading')}
    >
      Currently Reading
    </span>
    <span
      className={cn('side-bar__item', shelf === 'wantToRead' && 'side-bar__item--selected')}
      onClick={() => onClick('wantToRead')}
    >
      Want to Read
    </span>
    <span
      className={cn('side-bar__item', shelf === 'read' && 'side-bar__item--selected')}
      onClick={() => onClick('read')}
    >
      Read
    </span>
  </aside>
)

export default SideBar
