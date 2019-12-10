import React, { useState, memo } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import { confirmAlert } from 'react-confirm-alert'
import Headline2 from './Headline2'
import Headline3 from './Headline3'
import Input from './Input'
import Description from './Description'
import Checkboxes from './Checkboxes'
import AcceptButton from './AcceptButton'
import FinishButton from './FinishButton'
import uploadIcon from '../icons/upload.svg'

const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET
const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME

const MainForm = memo(() => {
  return (
    <>
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
    </>
  )
})

export default function Form({ onSubmit1 }) {
  const [picture, setPicture] = useState('Kein Bild ausgewählt')

  return (
    <Wrapper onSubmit={handleSubmit}>
      <MainForm />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FinishButton>Meldung hochladen</FinishButton>

        <UploadWrapper>
          <Headline3 style={{ color: 'rgb(253 252 251)' }}>
            Foto Hochladen
          </Headline3>
          <input
            style={{ display: 'none' }}
            type="file"
            name="file"
            onChange={onInput}
          ></input>
          <img src={uploadIcon} alt={'upload icon'}></img>
        </UploadWrapper>
        <ChoosenPicture>{picture}</ChoosenPicture>
      </div>
    </Wrapper>
  )

  function handleSubmit(event) {
    console.log('submit')
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    if (data.file.name === '') {
      confirmAlert({
        title: 'Bestätigung',
        message: 'Möchten Sie ihre Meldung wirklich hochladen?',
        buttons: [
          {
            label: 'Ja',
            onClick: () => onSubmit1(data),
          },
          {
            label: 'Nein',
          },
        ],
      })
      form.reset()
      confirmSuccessfulUpload()
    } else {
      confirmAlert({
        title: 'Bestätigung',
        message: 'Möchten Sie ihre Meldung wirklich hochladen?',
        buttons: [
          {
            label: 'Ja',
            onClick: () => postImage(formData, data, form),
          },
          {
            label: 'Nein',
          },
        ],
      })
    }
    console.log(data)
  }

  function postImage(formData, data, form) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`
    formData.append('file', form.file.files[0])
    formData.append('upload_preset', PRESET)
    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err))

    function onImageSave(response) {
      data.url = response.data.url
      console.log(data)
      onSubmit1(data)
      confirmSuccessfulUpload()
      form.reset()
    }
  }
  function confirmSuccessfulUpload() {
    confirmAlert({
      title: 'Ihre Meldung wurde erfolgreich hochgeladen.',
    })
  }

  function onInput(event) {
    const data = event.target.files
    if (data.length > 0) {
      setPicture(event.target.files[0].name)
    } else {
      setPicture('')
    }
  }
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
const UploadWrapper = styled.label`
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
  position: absolute;
  top: 1340px;
  background: rgb(201 193 171);
  padding: 4px 10px;
  border-radius: 5px;
`
const ChoosenPicture = styled.p`
  margin: 0;
  color: rgb(107, 107, 107);
  font-size: 14px;
  position: absolute;
  top: 1385px;
`
