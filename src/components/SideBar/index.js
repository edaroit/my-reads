import React from 'react'
import cn from 'classnames'

import './side-bar.css'

const SideBar = ({ onClick, shelf }) => (
  <aside className="side-bar">
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
