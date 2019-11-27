import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { FilterButton } from './icons/FilterButton'

export default function Header() {
  const Line = styled.div`
    height: 97px;
    border: solid 2px transparent;
    border-bottom-color: rgb(201 193 171);
  `

  return (
    <Line>
      <FilterButton></FilterButton>
    </Line>
  )
}
