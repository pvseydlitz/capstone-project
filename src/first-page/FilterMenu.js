import React from 'react'
import styled from 'styled-components/macro'

import ToggleButton from './ToggleButton'
import dropdownIcon from '../icons/dropdown.svg'

export default function FilterMenu({
  handleClick,
  filterActive,
  checkInput,
  searchedWord,
  handleChangeMonth,
  selectedMonth,
  handleChangeYear,
  selectedYear,
}) {
  return (
    <Menu>
      <Text>Gemerkte Meldungen</Text>
      <ToggleButton
        handleClick={handleClick}
        filterActive={filterActive}
      ></ToggleButton>
      <Input
        autoFocus
        type="text"
        placeholder="Suche eingeben"
        onChange={checkInput}
        value={searchedWord}
      ></Input>
      <Text2>Nach Monat oder Jahr sortieren</Text2>
      <Wrapper columnStart={'3'}>
        <DropDown
          name="monat"
          onChange={handleChangeMonth}
          value={selectedMonth}
        >
          <option value="">Monat</option>
          <option value="01">Januar</option>
          <option value="02">Februar</option>
          <option value="03">März</option>
          <option value="04">April</option>
          <option value="05">Mai</option>
          <option value="06">Juni</option>
          <option value="07">Juli</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">Dezember</option>
        </DropDown>
        <DropdownIcon src={dropdownIcon} alt="dropdown icon"></DropdownIcon>
      </Wrapper>
      <Wrapper columnStart={'4'}>
        <DropDown name="jahr" onChange={handleChangeYear} value={selectedYear}>
          <option value="">Jahr </option>
          <option value="19">2019</option>
          <option value="20">2020</option>
          <option value="21">2021</option>
          <option value="22">2022</option>
          <option value="23">2023</option>
          <option value="24">2024</option>
          <option value="25">2025</option>
        </DropDown>
        <DropdownIcon src={dropdownIcon} alt="dropdown icon"></DropdownIcon>
      </Wrapper>
    </Menu>
  )
}

const Menu = styled.div`
  position: relative;
  height: 200px;
  margin: 20px;
  margin-top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  @media (min-width: 768px) {
    grid-column: 1/3;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    height: 100px;
  }
  column-gap: 20px;
  align-items: center;
`
const Text = styled.h3`
  grid-row-start: 1;
  grid-column: 1 / 3;
  margin: 0;
  font-size: 16px;
  color: rgb(107, 107, 107);
`
const Input = styled.input`
  border: solid 2px rgb(201 193 171);
  grid-row-start: 2;
  grid-column: 1/3;
  height: 20px;
  width: 80%;
`
const Text2 = styled.h3`
  grid-row-start: 3;
  grid-column: 1 / 3;
  margin: 0;
  font-size: 16px;
  color: rgb(107, 107, 107);
  @media (min-width: 768px) {
    grid-column: 3/5;
    grid-row-start: 1;
  }
`
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  grid-row-start: 4;
  background: rgb(201 193 171);
  @media (min-width: 768px) {
    grid-column-start: ${props => props.columnStart};
    grid-row-start: 2;
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
