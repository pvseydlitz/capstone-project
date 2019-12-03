import React from 'react'
import styled from 'styled-components/macro'
import DropdownMenu from './DropdownMenu'
import FinishButton from './FinishButton'
import Checkboxes from './Checkboxes'
import uploadIcon from '../icons/upload.svg'

export default function Form({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    console.log(data)
    onSubmit(data)
    form.reset()
  }

  const Wrapper = styled.form`
    position: relative;
    margin: 0 20px;
    overflow-y: scroll;
  `
  const Headline = styled.h1`
    color: rgb(187 179 163);
    font-size: 21px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    margin: 0;
  `
  const Category = styled.div`
    display: grid;
    grid-template-rows: 32px 32px;
    position: absolute;
    top: 55px;
  `
  const Headline2 = styled.h2`
    margin: 0;
    color: rgb(107, 107, 107);
    font-size: 18px;
  `
  const GridWer = styled.div`
    display: grid;
    grid-template-rows: 43px 28px 53px 28px 53px 28px 32px;
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
  const GridWo = styled.div`
    display: grid;
    grid-template-rows: 75px 28px 53px 28px 53px 28px 32px;
    width: 100%;
    position: absolute;
    top: 460px;
  `
  const GridDescription = styled.div`
    display: grid;
    grid-template-rows: 32px 100px;
    width: 100%;
    position: absolute;
    top: 1018px;
  `
  const Description = styled.textarea`
    border: solid 2px rgb(201 193 171);
    resize: vertical;
  `
  const Note = styled.p`
    border: solid 2px rgb(107, 107, 107);
    padding: 5px;
    margin: 0;
    position: absolute;
    top: 1193px;
    color: rgb(107, 107, 107);
    font-size: 14px;
  `
  const Headline3Upload = styled.h3`
    margin: 0;
    color: rgb(107, 107, 107);
    font-size: 16px;
  `
  const UploadWrapper = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr;
    align-items: center;
    position: absolute;
    top: 1330px;
  `

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Headline>Neue Meldung erstellen</Headline>
      <Category>
        <Headline2>Kategorie der Meldung</Headline2>
        <DropdownMenu></DropdownMenu>
      </Category>
      <GridWer>
        <Headline2>Wer hat den Mangel festgestellt?</Headline2>
        <Headline3>Name</Headline3>
        <Input type="text" name="name"></Input>
        <Headline3>Telefonnummer</Headline3>
        <Input type="text" name="telefonnummer"></Input>
        <Headline3>E-Mail Adresse</Headline3>
        <Input type="text" name="email"></Input>
      </GridWer>
      <GridWo>
        <Headline2>Wann und wo wurde der Mangel festgelstellt?</Headline2>
        <Headline3>Datum</Headline3>
        <Input type="text" name="datum"></Input>
        <Headline3>Etage/Wohnung</Headline3>
        <Input type="text" name="wohnung"></Input>
        <Headline3>Raumbezeichnung</Headline3>
        <Input type="text" name="raumbezeichnung"></Input>
      </GridWo>
      <Checkboxes></Checkboxes>
      <GridDescription>
        <Headline2>Genaue Mangelbeschreibung</Headline2>
        <Description rows="5" name="beschreibung"></Description>
      </GridDescription>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <UploadWrapper>
          <Headline3Upload>Foto Hochladen</Headline3Upload>
          <img src={uploadIcon} alt={'upload icon'}></img>
        </UploadWrapper>
      </div>
      <Note>
        Hinweis: Für den Fall, dass es sich nicht um einen Gewährleistungsmangel
        handelt, ist der Aufwand für Anfahrts und Untersuchungskosten dem
        Architekturbüro und / oder der Handwerksfirma zu erstatten.
      </Note>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FinishButton>Meldung hochladen</FinishButton>
      </div>
    </Wrapper>
  )
}
