import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import Headline2 from './Headline2'
import Headline3 from './Headline3'
import Input from './Input'
import Description from './Description'
import Checkboxes from './Checkboxes'
import AcceptButton from './AcceptButton'
import FinishButton from './FinishButton'
import uploadIcon from '../icons/upload.svg'

const PRESET = 'htbzrys6'

export default function Form({ onSubmit1 }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    onSubmit1(data)
    form.reset()
  }

  const [image, setImage] = useState('')

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/dajgs01gh/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', PRESET)

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .then(console.log('successful upload'))
      .catch(err => console.error(err))
  }

  function onImageSave(response) {
    setImage(response.data.url)
  }

  const Wrapper = styled.form`
    position: relative;
  `
  const GridWer = styled.div`
    display: grid;
    grid-template-rows: 43px 28px 53px 28px 53px 28px 32px;
    width: 100%;
    position: absolute;
    top: 170px;
  `
  const GridWo = styled.div`
    display: grid;
    grid-template-rows: 75px 28px 53px 28px 53px 28px 32px;
    width: 100%;
    position: absolute;
    top: 460px;
  `
  const Note = styled.p`
    border: solid 2px rgb(107, 107, 107);
    padding: 5px;
    margin: 0;
    color: rgb(107, 107, 107);
    font-size: 14px;
    position: absolute;
    top: 1193px;
  `
  const UploadWrapper = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr;
    align-items: center;
    position: absolute;
    top: 1340px;
  `

  return (
    <Wrapper onSubmit={handleSubmit}>
      <GridWer>
        <Headline2>Wer hat den Mangel festgestellt?</Headline2>
        <Headline3>Name</Headline3>
        <Input type="text" name="name" required></Input>
        <Headline3>Telefonnummer</Headline3>
        <Input type="text" name="telefonnummer" required></Input>
        <Headline3>E-Mail Adresse</Headline3>
        <Input type="text" name="email" required></Input>
      </GridWer>
      <GridWo>
        <Headline2>Wann und wo wurde der Mangel festgelstellt?</Headline2>
        <Headline3>Datum</Headline3>
        <Input type="text" name="datum" required></Input>
        <Headline3>Etage/Wohnung</Headline3>
        <Input type="text" name="wohnung" required></Input>
        <Headline3>Raumbezeichnung</Headline3>
        <Input type="text" name="raumbezeichnung" required></Input>
      </GridWo>
      <Checkboxes></Checkboxes>
      <Description
        position={'1018px'}
        headline={'Genaue Mangelbeschreibung'}
      ></Description>
      <Note>
        Hinweis: Für den Fall, dass es sich nicht um einen Gewährleistungsmangel
        handelt, ist der Aufwand für Anfahrts und Untersuchungskosten dem
        Architekturbüro und / oder der Handwerksfirma zu erstatten.
      </Note>
      <AcceptButton></AcceptButton>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <UploadWrapper>
          <Headline3>Foto Hochladen</Headline3>
          <input type="file" name="file" onChange={upload} />
          {/* <img src={uploadIcon} alt={'upload icon'}></img> */}
        </UploadWrapper>
        <FinishButton>Meldung hochladen</FinishButton>
      </div>
    </Wrapper>
  )
}
