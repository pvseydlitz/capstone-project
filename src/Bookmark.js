import styled from 'styled-components/macro'
import React, { useState } from 'react'
import bookmarkGrey from './icons/bookmark-grey.svg'
import bookmarkRed from './icons/bookmark-red.svg'

export default function Bookmark() {
  const Bookmark = styled.div`
    position: absolute;
    top: -15px;
    right: 31px;
  `
  const [isBookmarked, setIsBookmarked] = useState(false)
  return (
    <Bookmark onClick={() => setIsBookmarked(!isBookmarked)}>
      {isBookmarked ? (
        <img src={bookmarkRed}></img>
      ) : (
        <img src={bookmarkGrey}></img>
      )}
    </Bookmark>
  )
}
