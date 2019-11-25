import React from 'react'
import styled from 'styled-components/macro'

export default function ShowMoreButton() {
  const ShowMoreButton = styled.button`
    width: 120px;
    height: 29px;
    border-radius: 5px;
    background: rgb(201 193 171);
    color: rgb(253 252 251);
    font-size: 16px;
    position: absolute;
    left: 22px;
    bottom: 16px;
  `
  return <ShowMoreButton>Show more</ShowMoreButton>
}
