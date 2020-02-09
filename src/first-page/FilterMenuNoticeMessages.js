import React from 'react'
import styled from 'styled-components/macro'

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
      </Wrapper>
      <Text start={'3'} startTabletRow={'1'} tabletColumn={'3/5'}>
        Nach Monat oder Jahr sortieren
      </Text>
      <Wrapper start={'4'} startTabletRow={'2'} startTabletColumn={'3'}>
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
      <Wrapper start={'4'} startTabletRow={'2'} startTabletColumn={'4'}>
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
  padding: 0 10px;
  background-image: url(' http://192.168.178.20:3000/static/media/dropdown.7f1cbd23.svg');
  background-repeat: no-repeat;
  background-position: 95% center;
`
const Wrapper = styled.div`
  position: relative;
  grid-row-start: ${props => props.start};
  grid-column: ${props => props.column};
  max-width: 250px;
  @media (min-width: 768px) {
    grid-row-start: ${props => props.startTabletRow};
    grid-column-start: ${props => props.startTabletColumn};
  }
`
