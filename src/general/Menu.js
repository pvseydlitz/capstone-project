import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import homeIcon from '../icons/home.svg'
import homeIconClicked from '../icons/home-clicked.svg'
import plusSignIcon from '../icons/plus-sign.svg'
import plusSignIconClicked from '../icons/plus-sign-clicked.svg'
import archiveIcon from '../icons/archive.svg'
import archiveIconClicked from '../icons/archive-clicked.svg'
import logout from '../icons/logout.svg'

export default function Menu({ position }) {
  const [homeClicked, setHomeClicked] = useState(true)
  const [createClicked, setCreateClicked] = useState(false)
  const [archiveClicked, setArchiveClicked] = useState(false)

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
  const Background = styled.div`
    width: 180px;
    height: 293px;
    background: rgb(255, 255, 255);
    border: 2px solid rgb(201 193 171);
    position: absolute;
    right: 0;
    top: ${position};
    z-index: 1;
    padding: 20px;
  `
  return (
    <Background>
      <Headline>Menu</Headline>
      <Grid>
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
          <NavButton>
            <img
              src={homeClicked ? homeIconClicked : homeIcon}
              alt="home button"
            ></img>
            <Headline2>Home</Headline2>
          </NavButton>
        </NavLink>

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
          <NavButton>
            <img
              src={createClicked ? plusSignIconClicked : plusSignIcon}
              alt="create button"
            ></img>
            <Headline2>Hochladen</Headline2>
          </NavButton>
        </NavLink>

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
          <NavButton>
            <img
              src={archiveClicked ? archiveIconClicked : archiveIcon}
              alt="document button"
            ></img>
            <Headline2>Dokumente</Headline2>
          </NavButton>
        </NavLink>
        <NavButton onClick={handleLogout}>
          <Logout src={logout}></Logout>
          <Headline2>Abmelden</Headline2>
        </NavButton>
      </Grid>
    </Background>
  )
}
Menu.propTypes = {
  position: PropTypes.string,
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 40px);
  grid-gap: 20px;
  margin-top: 10px;
`
const Headline = styled.h2`
  margin: 0;
  font-size: 20px;
  color: rgb(187 179 163);
`

const NavButton = styled.label`
  border: none;
  background: none;
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
  grid-gap: 10px;
  cursor: pointer;
`
const Headline2 = styled.h3`
  margin: 0;
  color: rgb(107, 107, 107);
  font-size: 16px;
`
const Logout = styled.img`
  cursor: pointer;
`
