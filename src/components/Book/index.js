import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ title, authors }) => (
  <div>
    {title}
    {authors}
  </div>
)

Book.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.string),
}

Book.defaultProps = {
  title: null,
  authors: [],
}

export default Book
