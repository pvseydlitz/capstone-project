import styled from 'styled-components/macro'
import React from 'react'
import PropTypes from 'prop-types'

import bookmarkGrey from '../icons/bookmark-grey.svg'
import bookmarkRed from '../icons/bookmark-red.svg'

export default function Bookmark({ bookmarked, onClick }) {
  const Bookmark = styled.div`
    position: absolute;
    top: -15px;
    left: 20px;
    cursor: pointer;
  `

  return (
    <Bookmark>
      <img
        src={bookmarked ? bookmarkRed : bookmarkGrey}
        onClick={onClick}
        alt="Bookmark"
      />
    </Bookmark>
  )
}

Bookmark.propTypes = {
  bookmarked: PropTypes.bool,
}
