import React from 'react'
import styled from 'styled-components/macro'

import ToggleButton from './ToggleButton'

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
    <Menu id="filterMenu">
      <Text>Gemerkte Meldungen</Text>
      <ToggleButton
        handleClick={handleClick}
        filterActive={filterActive}
      ></ToggleButton>
      <Input
        type="text"
        placeholder="Nach Nummer, Bereich, Etage, Wohnung oder Raum suchen"
        onChange={checkInput}
        value={searchedWord}
      ></Input>
      <Text2>Nach Monat oder Jahr filtern</Text2>
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
  width: 90%;
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

const DropDown = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  cursor: pointer;
  color: rgb(107 107 107);
  background: rgb(201 193 171);
  font-size: 16px;
  height: 32px;
  width: 100%;
  padding-left: 10px;
  background-image: url('https://res.cloudinary.com/dajgs01gh/image/upload/v1581717374/dropdown_y3kmal.svg');
  background-repeat: no-repeat;
  background-position: 95% center;
`
const Wrapper = styled.div`
  position: relative;
  max-width: 250px;
`
