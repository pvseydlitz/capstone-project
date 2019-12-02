import React, { useState } from 'react'
import styled from 'styled-components/macro'
import FilterButton from './FilterButton'
import FilterMenu from './FilterMenu'
import logo from './icons/logo.svg'
import filterIcon from './icons/filterbutton.svg'

export default function Header({ filterMessages, filterActive }) {
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
  const [isClicked, setIsClicked] = useState(false)
  return (
    <Line>
      <FilterButton
        src={filterIcon}
        onClick={() => setIsClicked(!isClicked)}
      ></FilterButton>
      <span
        style={{
          fontSize: '30px',
          color: 'rgb(201 193 171)',
          margin: ' 30px 0',
          height: '30px',
        }}
      >
        FlatChat
      </span>
      {/* <Logo src={logo}></Logo> */}
      {isClicked ? (
        <FilterMenu
          handleClick={filterMessages}
          filterActive={filterActive}
        ></FilterMenu>
      ) : (
        ''
      )}
    </Line>
  )
}
