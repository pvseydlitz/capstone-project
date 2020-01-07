import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import logo from './icons/logo.svg'
import logout from './icons/logout.svg'
import searchIcon from './icons/search.svg'

export default function Header2(
  showSearchIcon,
  checkInput,
  searchedNumber,
  active
) {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const Line = styled.div`
    height: 45px;
    border: solid 2px transparent;
    border-bottom-color: rgb(201 193 171);
    position: relative;
    display: flex;
    justify-content: center;
  `
  const Logo = styled.img`
    z-index: -1;
  `
  const Logout = styled.img`
    position: absolute;
    top: 10px;
    right: 25px;
  `
  const Search = styled.img`
    position: absolute;
    top: 10px;
    left: 25px;
  `
  const Input = styled.input`
    border: solid 2px rgb(201 193 171);
    z-index: 1;
    position: absolute;
    left: 0;
    top: 45px;
    height: 25px;
    width: 100%;
  `
  function handleLogout() {
    fetch('/logout').then((window.location.href = `/`))
  }
  return (
    <Line>
      <Logout src={logout} onClick={handleLogout}></Logout>
      <Logo src={logo} alt="logo"></Logo>
      {showSearchIcon.showSearchIcon === true ? (
        <Search
          src={searchIcon}
          onClick={() => setShowSearchBar(!showSearchBar)}
        ></Search>
      ) : (
        ''
      )}
      {showSearchBar ? (
        <Input
          autoFocus
          type="text"
          placeholder="Suche nach Nummer oder Ort/Bauteil eingeben"
          onChange={checkInput}
          value={searchedNumber}
          showSearchBar={active}
        ></Input>
      ) : (
        ''
      )}
    </Line>
  )
}
Header2.propTypes = {
  showSearchIcon: PropTypes.bool,
}
