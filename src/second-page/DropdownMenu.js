import React from 'react'
import styled from 'styled-components/macro'
import dropdownIcon from '../icons/dropdown.svg'

export default function DropdownMenu({ handleChange, selected }) {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: '217px 33px',
        alignItems: 'center',
      }}
    >
      <DropDown name="kategorie" onChange={handleChange} value={selected}>
        <option value="" hidden>
          Bitte auswählen
        </option>
        <option value="Gewährleistungsmangel">Gewährleistungsmangel</option>
        <option value="Tüv-Mangel">TÜV-Mangel</option>
      </DropDown>
      <DropdownIcon src={dropdownIcon} alt="dropdown icon"></DropdownIcon>
    </section>
  )
}

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
  text-align: center;
  display: inline;
  pointer-events: none;
  z-index: 1;
`
