import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import FilterButton from '../first-page/FilterButton'
import Menu from './Menu'

import logo from '../icons/logo.svg'
import filterIcon from '../icons/filterbutton.svg'
import filterIconClicked from '../icons/filterbutton-clicked.svg'
import menu from '../icons/menu.svg'
import menuClicked from '../icons/menu-clicked.svg'
export default function Header({
  showFilter1,
  showFilter2,
  showFilter3,
  handleClick1,
  handleClick2,
  handleClick3,
  filterMenu1Active,
  filterMenu2Active,
  filterMenu3Active,
  backgroundInvisible,
}) {
  const [showMenu, setShowMenu] = useState(false)
  function handleShowMenu() {
    setShowMenu(!showMenu)
    backgroundInvisible()
  }
  function filter1Clicked() {
    handleClick1()
    const menu = document.querySelector('#messageWrapper')
    menu.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  function filter2Clicked() {
    handleClick2()
    const menu = document.querySelector('#messageWrapper')
    menu.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  function filter3Clicked() {
    handleClick3()
    const menu = document.querySelector('#messageWrapper')
    menu.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <Line>
      {showFilter1 ? (
        <Label onClick={() => filter1Clicked()}>
          <FilterButton
            src={filterMenu1Active ? filterIconClicked : filterIcon}
            alt="filter icon"
          ></FilterButton>
          <Filter active={filterMenu1Active}>Filter</Filter>
        </Label>
      ) : (
        ''
      )}
      {showFilter2 ? (
        <Label onClick={() => filter2Clicked()}>
          <FilterButton
            src={filterMenu2Active ? filterIconClicked : filterIcon}
            alt="filter icon"
          ></FilterButton>
          <Filter active={filterMenu2Active}>Filter</Filter>
        </Label>
      ) : (
        ''
      )}
      {showFilter3 ? (
        <Label onClick={() => filter3Clicked()}>
          <FilterButton
            src={filterMenu3Active ? filterIconClicked : filterIcon}
            alt="filter icon"
          ></FilterButton>
          <Filter active={filterMenu3Active}>Filter</Filter>
        </Label>
      ) : (
        ''
      )}
      <MenuLabel1 onClick={() => handleShowMenu()}>
        <MenuButton src={showMenu ? menuClicked : menu}></MenuButton>
      </MenuLabel1>
      {showMenu ? (
        <MenuLabel2 onClick={() => handleShowMenu()}>
          <Menu position={'97px'}></Menu>
        </MenuLabel2>
      ) : (
        ''
      )}
      <Logo src={logo} alt="logo"></Logo>
    </Line>
  )
}
Header.propTypes = {
  showFilter1: PropTypes.bool,
  showFilter2: PropTypes.bool,
  showFilter3: PropTypes.bool,
}
const Line = styled.div`
  height: 97px;
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
const Label = styled.label`
  height: 50px;
  width: 120px;
  position: absolute;
  left: 0;
  top: 30px;
  cursor: pointer;
`
const Filter = styled.p`
  margin: 0px;
  color: ${(props) =>
    props.active ? 'rgb(187 179 163)' : 'rgb(107, 107, 107)'};
  font-size: 16px;
  position: absolute;
  top: 18px;
  left: 48px;
`
const MenuLabel1 = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  height: 90px;
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
const MenuButton = styled.img`
  position: absolute;
  top: 45px;
  right: 25px;
  cursor: pointer;
`
