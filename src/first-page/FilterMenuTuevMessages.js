import React from 'react'
import styled from 'styled-components/macro'

import dropdownIcon from '../icons/dropdown.svg'

export default function FilterMenuTuevMessages({
  checkInput,
  searchedWord,
  handleFilterStatus,
  selectedStatus,
}) {
  return (
    <Menu>
      <Text start={'1'} startTabletRow={'1'} tabletColumn={'1/3'}>
        Nach Nummer oder Ort/Bauteil suchen
      </Text>
      <Input
        autoFocus
        type="text"
        placeholder="Suchbegriff eingeben"
        onChange={checkInput}
        value={searchedWord}
      ></Input>
      <Text start={'3'} startTabletRow={'1'} tabletColumn={'3/5'}>
        Nach Bearbeitungsstatus sortieren
      </Text>
      <Wrapper>
        <DropDown
          name="status"
          onChange={handleFilterStatus}
          value={selectedStatus}
        >
          <option value="">Bitte auswählen</option>
          <option value="1">In Bearbeitung</option>
          <option value="2">Handwerker kommt</option>
          <option value="3">Mangel behoben</option>
        </DropDown>
        <DropdownIcon src={dropdownIcon} alt="dropdown icon"></DropdownIcon>
      </Wrapper>
    </Menu>
  )
}

const Menu = styled.div`
  position: relative;
  height: 150px;
  margin: 20px;
  margin-top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  column-gap: 20px;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 75px;
    grid-column: 1/3;
  }
`

const Input = styled.input`
  border: solid 2px rgb(201 193 171);
  grid-row-start: 2;
  grid-column: 1/3;
  height: 20px;
  width: 80%;
`
const Text = styled.h3`
  grid-row-start: ${props => props.start};
  grid-column: 1 / 3;
  margin: 0;
  font-size: 16px;
  color: rgb(107, 107, 107);
  @media (min-width: 768px) {
    grid-row-start: ${props => props.startTabletRow};
    grid-column: ${props => props.tabletColumn};
  }
`
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  grid-row-start: 4;
  background: rgb(201 193 171);
  @media (min-width: 768px) {
    grid-row-start: 2;
    grid-column: 3;
  }
`
const DropDown = styled.select`
  color: rgb(107 107 107);
  background: rgb(201 193 171);
  font-size: 16px;
  height: 32px;
  border: none;
  padding-left: 5px;
  -webkit-appearance: button;
  appearance: button;
  outline: none;
  position: relative;
`
const DropdownIcon = styled.img`
  grid-column-start: 2;
  text-align: center;
  display: inline;
  pointer-events: none;
  z-index: 1;
`