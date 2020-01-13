import React from 'react'
import styled from 'styled-components/macro'
import dropdownIcon from '../icons/dropdown.svg'

export default function DropdownMenu({ handleChangeDropdown, selected }) {
  function handleChange(event) {
    let number = event.target.value
    console.log(number)
    handleChangeDropdown(number)
  }
  return (
    <Wrapper2>
      <DropDown name="kategorie" onChange={handleChange} value={selected}>
        <option value="0">Bearbeitungsstand</option>
        <option value="1">In Bearbeitung</option>
        <option value="2">Handwerker kommt</option>
        <option value="3">Mangel behoben</option>
      </DropDown>
      <DropdownIcon src={dropdownIcon} alt="dropdown icon"></DropdownIcon>
    </Wrapper2>
  )
}
const Wrapper2 = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  background: rgb(201 193 171);
  height: 24px;
`
const DropDown = styled.select`
  background: rgb(201 193 171);
  color: rgb(107 107 107);
  font-size: 14px;
  height: 24px;
  border: none;
  padding-left: 5px;
  -webkit-appearance: button;
  appearance: button;
  outline: none;
  position: relative;
`
const DropdownIcon = styled.img`
  justify-self: center;
  text-align: center;
  display: inline;
  pointer-events: none;
  z-index: 1;
`
