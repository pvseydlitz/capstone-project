import React from 'react'
import styled from 'styled-components/macro'
import home from './icons/home.svg'
import plusSign from './icons/plus-sign.svg'
import calendar from './icons/calendar.svg'
import person from './icons/person.svg'

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
      <img src={home}></img>
      <img src={plusSign}></img>
      <img src={calendar}></img>
      <img src={person}></img>
    </Footer>
  )
}
