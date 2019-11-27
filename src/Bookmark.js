import styled from 'styled-components/macro'
import React from 'react'
import BookmarkIcon from './BookmarkIcon'

export default function Bookmark() {
  const Bookmark = styled.div`
    position: absolute;
    top: -15px;
    right: 31px;
  `

  return (
    <Bookmark>
      <BookmarkIcon></BookmarkIcon>
    </Bookmark>
  )
}
