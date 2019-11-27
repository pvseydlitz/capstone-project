import React, { useState } from 'react'
import { ReactComponent as BookmarkIcon } from './icons/bookmark.svg'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Bookmark() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const Icon = styled.div``

  return (
    <Icon
      onClick={() => setIsBookmarked(!isBookmarked)}
      bookmarked={isBookmarked}
    >
      <BookmarkIcon fill={'deeppink'}></BookmarkIcon>
    </Icon>
  )
}

Bookmark.propTypes = {
  bookmarked: PropTypes.bool,
}
