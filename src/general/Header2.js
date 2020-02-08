import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import logo from '../icons/logo.svg'
import logout from '../icons/logout.svg'
import searchIcon from '../icons/search.svg'

export default function Header2({
  showSearchIcon,
  checkInput,
  searchedItem,
  active,
}) {
  const [showSearchBar, setShowSearchBar] = useState(false)
  function handleLogout() {
    fetch('/logout', {
      mode: 'no-cors',
      method: 'POST',
      headers: { 'content-type': 'application json' },
    })
      .then(function(response) {
        if (response.status === 200) {
          return (window.location.href = `/`)
        }
      })
      .catch(function(err) {
        console.log(err)
      })
  }
  return (
    <Line>
      <Logout src={logout} onClick={handleLogout}></Logout>
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
    </Line>
  )
}
Header2.propTypes = {
  showSearchIcon: PropTypes.bool,
}
const Line = styled.div`
  height: 45px;
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
const Logout = styled.img`
  position: absolute;
  top: 10px;
  right: 25px;
  cursor: pointer;
`
const Search = styled.img`
  position: absolute;
  top: 10px;
  left: 25px;
  cursor: pointer;
`
const Input = styled.input`
  border: solid 2px rgb(201 193 171);
  z-index: 1;
  position: absolute;
  left: 0;
  top: 40px;
  height: 25px;
  width: 100%;
`
const Label = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
`
