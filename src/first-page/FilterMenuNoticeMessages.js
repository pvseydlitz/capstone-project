import React from 'react'
import styled from 'styled-components/macro'

import dropdownIcon from '../icons/dropdown.svg'

export default function FilterMenuNoticeMessages({
  handleChangeKategorie,
  selectedKategorie,
  handleChangeMonth,
  selectedMonth,
  handleChangeYear,
  selectedYear,
}) {
  return (
    <Menu>
      <Text start={'1'}>Nach Kategorie sortieren</Text>
      <Wrapper start={'2'} column={'1 / 3'}>
        <DropDown
          name="kategorie"
          onChange={handleChangeKategorie}
          value={selectedKategorie}
        >
          <option value="">Bitte auswählen</option>
          <option value="Handwerker Termin">Handwerker Termin</option>
          <option value="Allgemeine Informationen">
            Allgemeine Informationen
          </option>
          <option value="Dachterasse">Dachterasse</option>
        </DropDown>
        <DropdownIcon
          src={dropdownIcon}
          alt="dropdown icon"
          position={'-5px'}
        ></DropdownIcon>
      </Wrapper>
      <Text start={'3'}>Nach Monat oder Jahr sortieren</Text>
      <Wrapper start={'4'}>
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
      <Wrapper start={'4'}>
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
  height: 150px;
  margin: 20px;
  margin-top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  column-gap: 20px;
  align-items: center;
`
const Text = styled.h3`
  grid-row-start: ${props => props.start};
  grid-column: 1 / 3;
  margin: 0;
  font-size: 16px;
  color: rgb(107, 107, 107);
`
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  grid-row-start: ${props => props.start};
  grid-column: ${props => props.column};
  max-width: 235px;
  background: rgb(201 193 171);
  position: relative;
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
`
const DropdownIcon = styled.img`
  grid-column-start: 2;
  text-align: center;
  display: inline;
  pointer-events: none;
  z-index: 1;
  position: absolute;
  left: ${props => props.position};
`
