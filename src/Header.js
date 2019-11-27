import React, { useState } from 'react'
import styled from 'styled-components/macro'
import FilterButton from './FilterButton'
import logo from './icons/logo.svg'
import FilterMenu from './FilterMenu'

export default function Header({ isClicked }) {
  const Line = styled.div`
    height: 97px;
    border: solid 2px transparent;
    border-bottom-color: rgb(201 193 171);
    position: relative;
    display: flex;
    justify-content: center;
  `
  const Logo = styled.img`
    z-index: -1;
  `

  return (
    <Line>
      <FilterButton></FilterButton>
      <Logo src={logo}></Logo>
      {isClicked ? <FilterMenu></FilterMenu> : ''}
    </Line>
  )
}
