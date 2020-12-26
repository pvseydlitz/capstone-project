import React from 'react'
import styled from 'styled-components/macro'

import Headline3 from './Headline3'
import Input from './Input'
import Description from './Description'
import FinishButton from './FinishButton'

export default function FormNotice({ onSubmit3 }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    data.anzeigen = true
    onSubmit3(data)
    form.reset()
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Grid>
        <Headline3>Kategorie</Headline3>
        <Wrapper2>
          <DropDown name="kategorie" required>
            <option value="">Bitte auswählen</option>
            <option value="Allgemeine Informationen">
              Allgemeine Informationen
            </option>
            <option value="Ankündigung">Ankündigung</option>
          </DropDown>
        </Wrapper2>
        <Headline3>Datum</Headline3>
        <Input type="date" name="datum" required></Input>
        <Headline3>Absender</Headline3>
        <Input type="text" name="absender" required></Input>
      </Grid>
      <Description headline={'Mitteilung'} name={'beschreibung'}></Description>
      <GridFinish>
        <FinishButton style={{ top: '524px' }}>Meldung hochladen</FinishButton>
      </GridFinish>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  position: relative;
  margin: 0 20px;
  @media (min-width: 768px) {
    margin: 0 20%;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto);
  grid-gap: 15px;
  width: 100%;
`
const GridFinish = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  width: 100%;
  grid-gap: 15px;
  justify-items: center;
  margin-bottom: 40px;
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
const Wrapper2 = styled.div`
  position: relative;
  min-width: 220px;
  max-width: 300px;
`
