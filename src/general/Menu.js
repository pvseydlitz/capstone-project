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
import phoneIcon from '../icons/phone.svg'
import phoneIconClicked from '../icons/phone-clicked.svg'
import logout from '../icons/logout.svg'

export default function Menu({ position }) {
  const [homeClicked, setHomeClicked] = useState(true)
  const [createClicked, setCreateClicked] = useState(false)
  const [archiveClicked, setArchiveClicked] = useState(false)
  const [phoneClicked, setPhoneClicked] = useState(false)

  function handleLogout() {
    fetch('/logout', {
      mode: 'no-cors',
      method: 'POST',
      headers: { 'content-type': 'application json' },
    })
      .then(function (response) {
        localStorage.removeItem('time')
        localStorage.removeItem('accept')
        localStorage.removeItem('user')
        if (response.status === 200) {
          return (window.location.href = `/`)
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  const Background = styled.div`
    width: 300px;
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
          style={{ textDecoration: 'none' }}
          to="/"
          isActive={(match) => {
            if (!match) {
              return false
            }
            return (
              setHomeClicked(true) +
              setCreateClicked(false) +
              setArchiveClicked(false) +
              setPhoneClicked(false)
            )
          }}
        >
          <NavButton>
            <img
              src={homeClicked ? homeIconClicked : homeIcon}
              alt="home button"
            ></img>
            <Headline21 active={homeClicked}>Home</Headline21>
          </NavButton>
        </NavLink>

        <NavLink
          style={{ textDecoration: 'none' }}
          to="/create"
          isActive={(match) => {
            if (!match) {
              return false
            }
            return (
              setHomeClicked(false) +
              setCreateClicked(true) +
              setArchiveClicked(false) +
              setPhoneClicked(false)
            )
          }}
        >
          <NavButton>
            <img
              src={createClicked ? plusSignIconClicked : plusSignIcon}
              alt="create button"
            ></img>
            <Headline22 active={createClicked}>Meldung erstellen</Headline22>
          </NavButton>
        </NavLink>

        <NavLink
          style={{ textDecoration: 'none' }}
          to="/upload"
          isActive={(match) => {
            if (!match) {
              return false
            }
            return (
              setHomeClicked(false) +
              setCreateClicked(false) +
              setArchiveClicked(true) +
              setPhoneClicked(false)
            )
          }}
        >
          <NavButton>
            <img
              src={archiveClicked ? archiveIconClicked : archiveIcon}
              alt="document button"
            ></img>
            <Headline23 active={archiveClicked}>Dokumente</Headline23>
          </NavButton>
        </NavLink>
        <NavLink
          style={{ textDecoration: 'none' }}
          to="/impressum"
          isActive={(match) => {
            if (!match) {
              return false
            }
            return (
              setHomeClicked(false) +
              setCreateClicked(false) +
              setArchiveClicked(false) +
              setPhoneClicked(true)
            )
          }}
        >
          <NavButton>
            <img
              src={phoneClicked ? phoneIconClicked : phoneIcon}
              alt="phone button"
            ></img>
            <Headline24 active={phoneClicked}>Kontakt & Impressum</Headline24>
          </NavButton>
        </NavLink>

        <NavButton onClick={handleLogout}>
          <Logout src={logout}></Logout>
          <Headline25>Abmelden</Headline25>
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
  grid-template-rows: repeat(5, 40px);
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
const Headline21 = styled.h3`
  margin: 0;
  color: ${(props) =>
    props.active ? 'rgb(187 179 163)' : 'rgb(107, 107, 107)'};
  font-size: 16px;
  &:hover {
    font-size: 18px;
  }
`
const Headline22 = styled.h3`
  margin: 0;
  color: ${(props) =>
    props.active ? 'rgb(187 179 163)' : 'rgb(107, 107, 107)'};
  font-size: 16px;
  &:hover {
    font-size: 18px;
  }
`
const Headline23 = styled.h3`
  margin: 0;
  color: ${(props) =>
    props.active ? 'rgb(187 179 163)' : 'rgb(107, 107, 107)'};
  font-size: 16px;
  &:hover {
    font-size: 18px;
  }
`
const Headline24 = styled.h3`
  margin: 0;
  color: ${(props) =>
    props.active ? 'rgb(187 179 163)' : 'rgb(107, 107, 107)'};
  font-size: 16px;
  &:hover {
    font-size: 18px;
  }
`
const Headline25 = styled.h3`
  margin: 0;
  color: ${(props) =>
    props.active ? 'rgb(187 179 163)' : 'rgb(107, 107, 107)'};
  font-size: 16px;
  &:hover {
    font-size: 18px;
  }
`
const Logout = styled.img`
  cursor: pointer;
`
