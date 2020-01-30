import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import homeIcon from '../icons/home.svg'
import homeIconClicked from '../icons/home-clicked.svg'
import plusSignIcon from '../icons/plus-sign.svg'
import plusSignIconClicked from '../icons/plus-sign-clicked.svg'
import archiveIcon from '../icons/archive.svg'
import archiveIconClicked from '../icons/archive-clicked.svg'

export default function Footer() {
  const [homeClicked, setHomeClicked] = useState(true)
  const [createClicked, setCreateClicked] = useState(false)
  const [archiveClicked, setArchiveClicked] = useState(false)

  return (
    <FooterStyle>
      <NavButton>
        <NavLink
          to="/"
          isActive={match => {
            if (!match) {
              return false
            }
            return (
              setHomeClicked(true) +
              setCreateClicked(false) +
              setArchiveClicked(false)
            )
          }}
        >
          <img
            src={homeClicked ? homeIconClicked : homeIcon}
            alt="home button"
          ></img>
        </NavLink>
      </NavButton>
      <NavButton>
        <NavLink
          to="/create"
          isActive={match => {
            if (!match) {
              return false
            }
            return (
              setHomeClicked(false) +
              setCreateClicked(true) +
              setArchiveClicked(false)
            )
          }}
        >
          <img
            src={createClicked ? plusSignIconClicked : plusSignIcon}
            alt="create button"
          ></img>
        </NavLink>
      </NavButton>
      <NavButton>
        <NavLink
          to="/upload"
          isActive={match => {
            if (!match) {
              return false
            }
            return (
              setHomeClicked(false) +
              setCreateClicked(false) +
              setArchiveClicked(true)
            )
          }}
        >
          <img
            src={archiveClicked ? archiveIconClicked : archiveIcon}
            alt="calendar button"
          ></img>
        </NavLink>
      </NavButton>
    </FooterStyle>
  )
}
const FooterStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-content: center;
  height: 60px;
  border: solid 2px transparent;
  border-top-color: rgb(201 193 171);
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`
const NavButton = styled.label`
  border: none;
  background: none;
`
