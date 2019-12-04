import React from 'react'
import styled from 'styled-components/macro'
import dropdownIcon from '../icons/dropdown.svg'

export default function DropdwonMenu() {
  const DropDown = styled.select`
    background: rgb(201 193 171);
    color: rgb(107 107 107);
    font-size: 18px;
    width: 250px;
    height: 32px;
    border: none;
    padding-left: 5px;
    -webkit-appearance: button;
    appearance: button;
    outline: none;
    position: relative;
  `
  const DropdownIcon = styled.img`
    position: absolute;
    top: 37px;
    right: 5px;
    text-align: center;
    display: inline;
    pointer-events: none;
  `
  return (
    <section>
      <DropDown name="kategorie">
        <option defaultValue="1">Bitte auswählen</option>
        <option value="Gewährleistungsmangel">Gewährleistungsmangel</option>
        <option value="Ankündigung">Ankündigung</option>
      </DropDown>{' '}
      <DropdownIcon src={dropdownIcon} alt="dropdown icon"></DropdownIcon>
    </section>
  )
}
