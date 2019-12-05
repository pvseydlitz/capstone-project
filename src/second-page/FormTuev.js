import React from 'react'
import styled from 'styled-components/macro'
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

  const Headline2 = styled.h2`
    margin: 0;
    color: rgb(107, 107, 107);
    font-size: 18px;
  `
  const GridWer = styled.div`
    display: grid;
    grid-template-rows: 28px 53px 28px 53px;
    width: 100%;
    position: absolute;
    top: 170px;
  `
  const Input = styled.input`
    height: 32px;
    width: auto;
    border: solid 2px rgb(201 193 171);
  `
  const Headline3 = styled.h3`
    margin: 0;
    color: rgb(107, 107, 107);
    font-size: 16px;
  `

  const GridDescription = styled.div`
    display: grid;
    grid-template-rows: 32px 100px;
    width: 100%;
    position: absolute;
    top: 362px;
  `
  const Description = styled.textarea`
    border: solid 2px rgb(201 193 171);
    resize: vertical;
  `

  return (
    <Wrapper onSubmit={handleSubmit}>
      <GridWer>
        <Headline3>Nummer</Headline3>
        <Input type="text" name="nummer" required></Input>
        <Headline3>Ort/Bauteil</Headline3>
        <Input type="text" name="ort" required></Input>
      </GridWer>

      <GridDescription>
        <Headline2>Mangel / Feststellung / Hinweis</Headline2>
        <Description rows="5" name="mangel" required></Description>
      </GridDescription>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FinishButton style={{ top: '524px' }}>Meldung hochladen</FinishButton>
      </div>
    </Wrapper>
  )
}
