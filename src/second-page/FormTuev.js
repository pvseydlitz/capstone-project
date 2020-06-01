import React from 'react'
import styled from 'styled-components/macro'

import Headline3 from './Headline3'
import Input from './Input'
import Description from './Description'
import FinishButton from './FinishButton'

const PASSWORD = process.env.REACT_APP_PASSWORD

export default function FormTuev({ onSubmit2 }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    data.status = 1
    data.anzeigen = true
    if (data.password === PASSWORD) {
      onSubmit2(data)
      form.reset()
    }
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Grid>
        <Headline3>Nummer</Headline3>
        <Input type="text" name="nummer" required></Input>
        <Headline3>Ort/Bauteil</Headline3>
        <Input type="text" name="ort" required></Input>
      </Grid>
      <Description
        headline={'Mangel / Feststellung / Hinweis'}
        position={'362px'}
      ></Description>
      <GridFinish>
        <Input
          style={{ width: '100%' }}
          type="password"
          name="password"
          placeholder="Admin Passwort eingeben zum Hochladen"
          required
        ></Input>
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
