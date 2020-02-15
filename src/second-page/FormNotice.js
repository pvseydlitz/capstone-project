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
    onSubmit3(data)
    form.reset()
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Grid>
        <Headline3>Kategorie</Headline3>
        <Wrapper2>
          <DropDown name="kategorie">
            <option value="">Bitte auswählen</option>
            <option value="Allgemeine Informationen">
              Allgemeine Informationen
            </option>
            <option value="Ankündigung">Ankündigung</option>
          </DropDown>
        </Wrapper2>
        <Headline3>Datum</Headline3>
        <Input type="date" name="datum" required></Input>
      </Grid>
      <Description headline={'Mitteilung'} position={'362px'}></Description>
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
    margin: 0 100px;
  }
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
