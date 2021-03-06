import React from 'react'
import styled from 'styled-components/macro'

import Headline3 from './Headline3'
import Input from './Input'
import Description from './Description'
import FinishButton from './FinishButton'

export default function FormTuev({ onSubmit2 }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    //data.status = 1
    data.anzeigen = true
    onSubmit2(data)
    form.reset()
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
        headline={'Kurzbeschreibung gemäß TÜV-Protokoll'}
        name={'beschreibung'}
      ></Description>
      <Description headline={'Status'} name={'status'}></Description>
      <GridFinish>
        <FinishButton>Meldung hochladen</FinishButton>
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
  grid-template-rows: repeat(4, auto);
  grid-gap: 15px;
  width: 100%;
`
const GridFinish = styled.div`
  display: grid;
  grid-template-rows: repeat(1, auto);
  width: 100%;
  grid-gap: 15px;
  justify-items: center;
  margin-bottom: 40px;
`
