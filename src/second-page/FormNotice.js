import React from 'react'
import styled from 'styled-components/macro'
import { confirmAlert } from 'react-confirm-alert'

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
    if (data.datum.includes('-') === false) {
      data.datum = new Date(
        data.datum.slice(6, 10) +
          '-' +
          data.datum.slice(3, 5) +
          '-' +
          data.datum.slice(0, 2)
      )
    }
    data.anzeigen = true
    confirmAlert({
      title: 'Bestätigung',
      message: 'Möchten Sie ihre Meldung wirklich hochladen?',
      buttons: [
        {
          label: 'Ja',
          onClick: () => {
            onSubmit3(data)
            form.reset()
          },
        },
        {
          label: 'Nein',
        },
      ],
    })
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Grid>
        {/* <Headline3>Kategorie</Headline3>
        <Wrapper2>
          <DropDown name="kategorie" required>
            <option value="">Bitte auswählen</option>
            <option value="Allgemeine Informationen">
              Allgemeine Informationen
            </option>
            <option value="Ankündigung">Ankündigung</option>
          </DropDown>
        </Wrapper2> */}
        <Inline>
          <Headline3>Datum</Headline3>
          <Span id={'datumFormat'}>
            &nbsp;&nbsp;&nbsp;&nbsp;Bitte das Datum im Format tt.mm.jjjj angeben
          </Span>
        </Inline>
        <Input
          type="date"
          name="datum"
          placeholder={'tt.mm.jjjj'}
          onBlur={(event) => checkDate(event)}
          required
        ></Input>
        <Headline3>Absender</Headline3>
        <Input type="text" name="name" required></Input>
      </Grid>
      <Description
        headline={'Mitteilung'}
        name={'beschreibung'}
        required
      ></Description>
      <GridFinish>
        <FinishButton>Meldung hochladen</FinishButton>
      </GridFinish>
    </Wrapper>
  )
  function checkDate(event) {
    const input = event.target.value
    const span = document.getElementById('datumFormat')
    span.style.display = 'block'
    if (
      Number.isInteger(Number(input.slice(0, 2))) &&
      input.slice(2, 3) === '.' &&
      Number.isInteger(Number(input.slice(3, 5))) &&
      input.slice(5, 6) === '.' &&
      Number.isInteger(Number(input.slice(6, 10))) &&
      input.length === 10
    ) {
      span.style.display = 'none'
    } else if (
      Number.isInteger(Number(input.slice(0, 4))) &&
      input.slice(4, 5) === '-' &&
      Number.isInteger(Number(input.slice(5, 7))) &&
      input.slice(7, 8) === '-' &&
      Number.isInteger(Number(input.slice(8, 10))) &&
      input.length === 10
    ) {
      span.style.display = 'none'
    }
  }
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
  grid-template-rows: repeat(4, auto);
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
const Inline = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: flex-end;
`
const Span = styled.span`
  color: red;
  font-size: 12px;
  display: none;
`
/* const DropDown = styled.select`
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
` */
