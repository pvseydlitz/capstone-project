import React from 'react'
import styled from 'styled-components/macro'
import uploadIcon from './icons/upload.svg'

export default function From() {
  const Wrapper = styled.div`
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
    grid-template-rows: 32px 40px;
    width: 100%;
    position: absolute;
    top: 55px;
  `
  const Headline2 = styled.h2`
    margin: 0;
    color: rgb(107, 107, 107);
    font-size: 18px;
  `
  const Input = styled.input`
    height: 32px;
    width: auto;
    border: solid 2px rgb(201 193 171);
  `
  const GridWer = styled.div`
    display: grid;
    grid-template-rows: 43px 28px 53px 28px 53px 28px 32px;
    width: 100%;
    position: absolute;
    top: 170px;
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
  const GridCheckboxes = styled.div`
    position: absolute;
    top: 787px;
    display: grid;
    grid-template-rows: repeat(4, 32px);
    grid-template-columns: 30px 1fr;
    grid-gap: 20px;
    align-items: center;
  `
  const Checkbox = styled.input`
    height: 20px;
    width: 20px;
    border-style: none;
    border: solid 2px rgb(201 193 171);
  `
  const Headline3Boxes = styled.h3`
    margin: 0;
    color: rgb(107, 107, 107);
    font-size: 16px;
    grid-column-start: 2;
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
    grid-template-columns: 170px 1fr;
    align-items: center;
    position: absolute;
    top: 1330px;
  `
  const FinishButton = styled.button`
    padding: 4px 24px;
    border-radius: 5px;
    font-size: 16px;
    background: rgb(201 193 171);
    color: rgb(253 252 251);
    position: absolute;
    top: 1407px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  `
  return (
    <Wrapper>
      <Headline>Neue Meldung erstellen</Headline>
      <Category>
        <Headline2>Kategorie der Meldung</Headline2>
        <Input style={{ height: '40px' }} type="text"></Input>
      </Category>
      <GridWer>
        <Headline2>Wer hat den Mangel festgestellt?</Headline2>
        <Headline3>Name</Headline3>
        <Input type="text"></Input>
        <Headline3>Telefonnummer</Headline3>
        <Input type="text"></Input>
        <Headline3>E-Mail Adresse</Headline3>
        <Input type="text"></Input>
      </GridWer>
      <GridWo>
        <Headline2>Wann und wo wurde der Mangel festgelstellt?</Headline2>
        <Headline3>Datum</Headline3>
        <Input type="text"></Input>
        <Headline3>Etage/Wohnung</Headline3>
        <Input type="text"></Input>
        <Headline3>Raumbezeichnung</Headline3>
        <Input type="text"></Input>
      </GridWo>
      <GridCheckboxes>
        <Checkbox type="checkbox"></Checkbox>
        <Headline3Boxes>Mangel im Innenbereich</Headline3Boxes>
        <Checkbox type="checkbox"></Checkbox>
        <Headline3Boxes>Mangel im Außenbereich</Headline3Boxes>
        <Checkbox type="checkbox"></Checkbox>
        <Headline3Boxes>Mangel Gemeinschaftseigentum</Headline3Boxes>
        <Checkbox type="checkbox"></Checkbox>
        <Headline3Boxes>Mangel Sondereigentum</Headline3Boxes>
      </GridCheckboxes>
      <GridDescription>
        <Headline2>Genaue Mangelbeschreibung</Headline2>
        <Description rows="5"></Description>
      </GridDescription>
      <UploadWrapper>
        <Headline3Upload>Foto Hochladen</Headline3Upload>
        <img src={uploadIcon}></img>
      </UploadWrapper>
      <Note>
        Hinweis: Für den Fall, dass es sich nicht um einen Gewährleistungsmangel
        handelt, ist der Aufwand für Anfahrtsund Untersuchungskosten dem
        Architekturbüro und / oder der handwerksfirma zu erstatten.
      </Note>
      <FinishButton>Meldung hochladen</FinishButton>
    </Wrapper>
  )
}
