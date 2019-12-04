import styled from 'styled-components/macro'
import React from 'react'
import bookmarkGrey from './icons/bookmark-grey.svg'
import bookmarkRed from './icons/bookmark-red.svg'

export default function Bookmark({ active, onClick }) {
  const Bookmark = styled.div`
    position: absolute;
    top: -15px;
    right: 31px;
  `

  return (
    <Bookmark>
      <img
        src={active ? bookmarkRed : bookmarkGrey}
        onClick={onClick}
        alt="Bookmark"
      />
    </Bookmark>
  )
}
