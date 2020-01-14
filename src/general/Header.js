import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import FilterButton from '../first-page/FilterButton'

import logo from '../icons/logo.svg'
import filterIcon from '../icons/filterbutton.svg'
import filterIconClicked from '../icons/filterbutton-clicked.svg'
import searchIcon from '../icons/search.svg'
import logout from '../icons/logout.svg'

export default function Header({
  showFilter,
  showSearchIcon,
  checkInput,
  searchedNumber,
  handleClick,
}) {
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
  const Label = styled.label`
    height: 50px;
    width: 120px;
    position: absolute;
    left: 0;
    top: 30px;
  `
  const Filter = styled.p`
    margin: 0px;
    color: ${props =>
      props.active ? 'rgb(187 179 163)' : 'rgb(107, 107, 107)'};
    font-size: 16px;
    position: absolute;
    top: 18px;
    left: 48px;
  `
  const Search = styled.img`
    position: absolute;
    top: 45px;
    right: 25px;
  `
  const Input = styled.input`
    border: solid 2px rgb(201 193 171);
    z-index: 1;
    position: absolute;
    left: 0;
    top: 85px;
    height: 25px;
    width: 100%;
  `
  const Logout = styled.img`
    position: absolute;
    top: 45px;
    right: 25px;
  `
  function handleLogout() {
    fetch('/logout').then((window.location.href = `/`))
  }
  const [isClicked, setIsClicked] = useState(false)
  const [showSearchBar, setShowSearchBar] = useState(false)

  return (
    <Line>
      {showFilter ? (
        <Label onClick={() => setIsClicked(!isClicked) + handleClick()}>
          <FilterButton
            src={isClicked ? filterIconClicked : filterIcon}
            alt="filter icon"
          ></FilterButton>
          <Filter active={isClicked}>Filter</Filter>
        </Label>
      ) : (
        ''
      )}
      {showSearchIcon ? (
        <Search
          src={searchIcon}
          alt=""
          onClick={() => setShowSearchBar(!showSearchBar)}
        ></Search>
      ) : (
        <Logout src={logout} onClick={handleLogout}></Logout>
      )}
      {showSearchBar ? (
        <Input
          autoFocus
          type="text"
          placeholder="Suche nach Nummer oder Ort/Bauteil eingeben"
          onChange={checkInput}
          value={searchedNumber}
        ></Input>
      ) : (
        ''
      )}
      <Logo src={logo} alt="logo"></Logo>
    </Line>
  )
}
Header.propTypes = {
  showFilter: PropTypes.bool,
  showSearchIcon: PropTypes.bool,
}
