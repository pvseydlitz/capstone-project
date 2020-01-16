import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import FilterButton from '../first-page/FilterButton'

import logo from '../icons/logo.svg'
import filterIcon from '../icons/filterbutton.svg'
import filterIconClicked from '../icons/filterbutton-clicked.svg'
import logout from '../icons/logout.svg'

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
}) {
  function handleLogout() {
    fetch('/logout').then((window.location.href = `/`))
  }

  return (
    <Line>
      {showFilter1 ? (
        <Label onClick={() => handleClick1()}>
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
        <Label onClick={() => handleClick2()}>
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
        <Label onClick={() => handleClick3()}>
          <FilterButton
            src={filterMenu3Active ? filterIconClicked : filterIcon}
            alt="filter icon"
          ></FilterButton>
          <Filter active={filterMenu3Active}>Filter</Filter>
        </Label>
      ) : (
        ''
      )}
      <Logout src={logout} onClick={handleLogout}></Logout>
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
`
const Filter = styled.p`
  margin: 0px;
  color: ${props => (props.active ? 'rgb(187 179 163)' : 'rgb(107, 107, 107)')};
  font-size: 16px;
  position: absolute;
  top: 18px;
  left: 48px;
`

const Logout = styled.img`
  position: absolute;
  top: 45px;
  right: 25px;
`
