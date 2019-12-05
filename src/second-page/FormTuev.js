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
    onSubmit2(data)
    form.reset()
  }

  const Wrapper = styled.form`
    position: relative;
  `
  const Grid = styled.div`
    display: grid;
    grid-template-rows: 28px 53px 28px 53px;
    width: 100%;
    position: absolute;
    top: 170px;
  `
  return (
    <Wrapper onSubmit={handleSubmit}>
      <Grid>
        <Headline3>Nummer</Headline3>
        <Input type="text" name="nummer" required></Input>
        <Headline3>Ort/Bauteil</Headline3>
        <Input type="text" name="ort" required></Input>
      </Grid>

      <Description
        headline={'Mangel / Feststellung/ Hinweis'}
        position={'362px'}
      ></Description>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FinishButton style={{ top: '524px' }}>Meldung hochladen</FinishButton>
      </div>
    </Wrapper>
  )
}
