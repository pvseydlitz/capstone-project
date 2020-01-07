import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import logo from './icons/logo.svg'
import logout from './icons/logout.svg'
import searchIcon from './icons/search.svg'

export default function Header2(showSearchIcon) {
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
  function handleLogout() {
    fetch('/logout').then((window.location.href = `/`))
  }
  return (
    <Line>
      <Logout src={logout} onClick={handleLogout}></Logout>
      <Logo src={logo} alt="logo"></Logo>
      {showSearchIcon.showSearchIcon === true ? (
        <Search src={searchIcon} /* onClick={showSearchbar} */></Search>
      ) : (
        ''
      )}
    </Line>
  )
}
Header2.propTypes = {
  showSearchIcon: PropTypes.bool,
}
