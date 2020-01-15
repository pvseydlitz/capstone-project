import React from 'react'
import styled from 'styled-components/macro'

import Headline3 from './Headline3'
import Input from './Input'
import Description from './Description'
import FinishButton from './FinishButton'
import dropdownIcon from '../icons/dropdown.svg'

const PASSWORD = process.env.REACT_APP_PASSWORD

export default function FormNotice({ onSubmit3 }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    console.log(data)
    onSubmit3(data)
    /* if (data.password === PASSWORD) {
      
      form.reset()
    } */
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Grid>
        <Headline3>Kategorie</Headline3>
        <Wrapper2>
          <DropDown
            name="kategorie" /* onChange={handleChange} value={selected} */
          >
            <option value="" hidden>
              Bitte auswählen
            </option>
            <option value="Handwerker Termin">Handwerker Termin</option>
            <option value="Ankündigung">Allgemeine Informationen</option>
            <option value="Dachterasse">Dachterasse</option>
          </DropDown>
          <DropdownIcon src={dropdownIcon} alt="dropdown icon"></DropdownIcon>
        </Wrapper2>
        <Headline3>Datum</Headline3>
        <Input type="date" name="datum" required></Input>
      </Grid>
      <Description headline={'Mitteilung'} position={'362px'}></Description>
      <GridFinish>
        <Input
          style={{ width: '100%' }}
          type="password"
          name="password"
          placeholder="Admin Passwort eingeben zum Hochladen"
          /* required */
        ></Input>
        <FinishButton style={{ top: '524px' }}>Meldung hochladen</FinishButton>
      </GridFinish>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  position: relative;
  margin: 0 20px;
`
const Grid = styled.div`
  display: grid;
  grid-template-rows: 28px 53px 28px 53px;
  width: 100%;
  position: absolute;
  top: 170px;
`
const GridFinish = styled.div`
  display: grid;
  grid-template-rows: 32px 26px;
  width: 100%;
  grid-gap: 15px;
  justify-items: center;
  position: absolute;
  top: 524px;
  margin-bottom: 40px;
`
const Wrapper2 = styled.section`
  display: grid;
  grid-template-columns: 217px 33px;
  align-items: center;
  height: 28px;
`
const DropDown = styled.select`
  background: rgb(201 193 171);
  color: rgb(107 107 107);
  font-size: 16px;
  width: 250px;
  height: 28px;
  border: none;
  padding-left: 5px;
  -webkit-appearance: button;
  appearance: button;
  outline: none;
`
const DropdownIcon = styled.img`
  text-align: center;
  display: inline;
  pointer-events: none;
  z-index: 1;
`
