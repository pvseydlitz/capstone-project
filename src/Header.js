import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import FilterButton from './FilterButton'
import FilterMenu from './FilterMenu'
import logo from './icons/logo.svg'
import filterIcon from './icons/filterbutton.svg'
import searchIcon from './icons/search.svg'

export default function Header({
  filterMessages,
  filterActive,
  showFilter,
  showSearchIcon,
  checkInput,
  searchedNumber,
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

  const [isClicked, setIsClicked] = useState(false)
  const [showSearchBar, setShowSearchBar] = useState(false)
  return (
    <Line>
      {showFilter ? (
        <FilterButton
          src={filterIcon}
          alt="filter icon"
          onClick={() => setIsClicked(!isClicked)}
        ></FilterButton>
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
        ''
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
      {/* <span
        style={{
          fontSize: '30px',
          color: 'rgb(201 193 171)',
          margin: ' 30px 0',
          height: '30px',
        }}
      >
        FlatChat
      </span> */}
      <Logo src={logo} alt="logo"></Logo>
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
Header.propTypes = {
  showFilter: PropTypes.bool,
  showSearchIcon: PropTypes.bool,
}
