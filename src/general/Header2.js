import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import Menu from './Menu'

import logo from '../icons/logo.svg'
import menu from '../icons/menu.svg'
import menuClicked from '../icons/menu-clicked.svg'
import searchIcon from '../icons/search.svg'

export default function Header2({
  showSearchIcon,
  checkInput,
  searchedItem,
  active,
  backgroundInvisible,
}) {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  function handleShowMenu() {
    setShowMenu(!showMenu)
    backgroundInvisible()
  }
  return (
    <Line>
      <Logo src={logo} alt="logo"></Logo>
      {showSearchIcon === true ? (
        <Search
          src={searchIcon}
          onClick={() => setShowSearchBar(!showSearchBar)}
        ></Search>
      ) : (
        ''
      )}
      {showSearchBar ? (
        <Label onClick={() => setShowSearchBar(!showSearchBar)}>
          <Input
            autoFocus
            type="text"
            placeholder="Suche nach Dokumentenname eingeben"
            onChange={checkInput}
            value={searchedItem}
            showSearchBar={active}
          ></Input>
        </Label>
      ) : (
        ''
      )}
      <MenuLabel1 onClick={() => handleShowMenu()}>
        <MenuButton src={showMenu ? menuClicked : menu}></MenuButton>
      </MenuLabel1>
      {showMenu ? (
        <MenuLabel2 onClick={() => handleShowMenu()}>
          <Menu position={'60px'}></Menu>
        </MenuLabel2>
      ) : (
        ''
      )}
    </Line>
  )
}
Header2.propTypes = {
  showSearchIcon: PropTypes.bool,
}
const Line = styled.div`
  height: 60px;
  border: solid 2px transparent;
  border-bottom-color: rgb(201 193 171);
  position: relative;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`
const Logo = styled.img`
  z-index: -1;
`
const MenuButton = styled.img`
  position: absolute;
  top: 20px;
  right: 25px;
  cursor: pointer;
`
const MenuLabel1 = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  height: 70px;
  width: 70px;
`
const MenuLabel2 = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`
const Search = styled.img`
  position: absolute;
  top: 20px;
  left: 25px;
  cursor: pointer;
`
const Input = styled.input`
  border: solid 2px rgb(201 193 171);
  z-index: 1;
  position: absolute;
  left: 0;
  top: 55px;
  height: 25px;
  width: 100%;
`
const Label = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;
`
