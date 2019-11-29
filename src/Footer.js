import React from 'react'
import styled from 'styled-components/macro'
import home from './icons/home.svg'
import plusSign from './icons/plus-sign.svg'
import calendar from './icons/calendar.svg'
import person from './icons/person.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  const Footer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-content: center;
    height: 60px;
    border: solid 2px transparent;
    border-top-color: rgb(201 193 171);
  `

  return (
    <Footer>
      <NavButton>
        <Link to="/">
          <img src={home}></img>
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/create">
          <img src={plusSign}></img>
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/calendar">
          <img src={calendar}></img>
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/person">
          <img src={person}></img>
        </Link>
      </NavButton>
    </Footer>
  )
}
const NavButton = styled.button`
  border: none;
  background: none;
`
