import React, { useState, memo } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import emailjs from 'emailjs-com'
import { confirmAlert } from 'react-confirm-alert'

import Headline2 from './Headline2'
import Headline3 from './Headline3'
import Input from './Input'
import Description from './Description'
import Checkboxes from './Checkboxes'
import DropdownMenuEtage from './DropdownMenuEtage'
import DropdownMenuWohnung from './DropdownmenuWohnung'
import FinishButton from './FinishButton'
import ModalPleaseWait from './ModalPleaseWait'
import uploadIcon from '../icons/upload.svg'

const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET
const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const USERID = process.env.REACT_APP_EMAILJS_USERID
const TEMPLATEID = process.env.REACT_APP_EMAILJS_TEMPLATEID
const SERVICEID = process.env.REACT_APP_EMAILJS_SERVICEID

const MainForm = memo(() => {
  const [choosenEtage, setChoosenEtage] = useState('')
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
        <Input
          type="date"
          name="datum"
          placeholder={'nach datum suchen'}
          required
          //onChange={event => console.log(event.target.value)}
        ></Input>
        <GridEtage>
          <Headline3>Etage</Headline3>
          <Headline3>Wohnung</Headline3>
        </GridEtage>

        <GridEtage>
          <DropdownMenuEtage
            handleSelect={(event) => {
              setChoosenEtage(event.target.value)
            }}
          ></DropdownMenuEtage>
          <DropdownMenuWohnung floor={choosenEtage}></DropdownMenuWohnung>
        </GridEtage>
        <Headline3>Raum-/Ortsbezeichnung</Headline3>
        <Input type="text" name="raumbezeichnung" required></Input>
      </GridWo>
      <Checkboxes></Checkboxes>
      <Description
        position={'1018px'}
        headline={'Genaue Mangelbeschreibung'}
      ></Description>
    </>
  )
})

export default function Form({ onSubmit1 }) {
  const [picture, setPicture] = useState('Kein Bild ausgewählt')

  return (
    <Wrapper onSubmit={handleSubmit} id="form">
      <MainForm />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FinishButton
          style={{ position: 'absolute', top: '1280px', marginBottom: '40px' }}
        >
          Meldung hochladen
        </FinishButton>
        <UploadWrapper>
          <Headline3 style={{ color: 'rgb(253 252 251)' }}>
            Foto Hochladen
          </Headline3>
          <input
            style={{ display: 'none' }}
            type="file"
            name="file"
            onChange={onInput}
            multiple
          ></input>
          <img src={uploadIcon} alt={'upload icon'}></img>
        </UploadWrapper>
        <ChoosenPicture>{picture}</ChoosenPicture>
      </div>
      <Modal id="modal">
        <ModalPleaseWait></ModalPleaseWait>
      </Modal>
    </Wrapper>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target

    const formData = new FormData(form)

    const data = Object.fromEntries(formData)
    let bereich = []
    if (data.innenbereich === 'true') {
      bereich.push('Innenbereich')
    }
    if (data.außenbereich === 'true') {
      bereich.push('Außenbereich')
    }
    if (data.gemeinschaftseigentum === 'true') {
      bereich.push('Gemeinschafteigentum')
    }
    if (data.sondereigentum === 'true') {
      bereich.push('Sondereigentum')
    }
    data.bereich = bereich
    data.anzeigen = true
    delete data.gemeinschaftseigentum
    delete data.sondereigentum
    delete data.innenbereich
    delete data.außenbereich
    console.log(data)
    if (data.file.name === '') {
      confirmAlert({
        title: 'Bestätigung',
        message: 'Möchten Sie ihre Meldung wirklich hochladen?',
        buttons: [
          {
            label: 'Ja',
            onClick: () => {
              const modal = document.getElementById('modal')
              modal.style.display = 'block'
              onSubmit1(data)
              sendEmail(data)
            },
          },
          {
            label: 'Nein',
          },
        ],
      })
      form.reset()
    } else {
      confirmAlert({
        title: 'Bestätigung',
        message: 'Möchten Sie ihre Meldung wirklich hochladen?',
        buttons: [
          {
            label: 'Ja',
            onClick: () => {
              const modal = document.getElementById('modal')
              modal.style.display = 'block'
              postImage(formData, data, form)
            },
          },
          {
            label: 'Nein',
          },
        ],
      })
    }
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
      .catch((err) => console.error(err))

    function onImageSave(response) {
      data.url = response.data.url
      onSubmit1(data)
      sendEmail(data)
      form.reset()
    }
  }

  function sendEmail(data) {
    const templateParams = {
      name: data.name,
      telefonnummer: data.telefonnummer,
      email: data.email,
      bereich: data.bereich.join(', '),
      datum: data.datum,
      etage: data.etage,
      wohnung: data.wohnung,
      raumbezeichnung: data.raumbezeichnung,
      beschreibung: data.beschreibung,
      url: data.url,
    }
    emailjs.send(SERVICEID, TEMPLATEID, templateParams, USERID).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
        const modal = document.getElementById('modal')
        modal.style.display = 'none'
        confirmSuccessfulUpload()
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
  }

  function confirmSuccessfulUpload() {
    confirmAlert({
      title: 'Ihre Meldung wurde erfolgreich hochgeladen.',
      buttons: [
        {
          label: 'Zur Home Seite',
          onClick: () => {
            window.location.href = '/'
          },
        },
        {
          label: 'Weitere Meldung hochladen',
        },
      ],
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
  margin: 0 20px;
  @media (min-width: 768px) {
    margin: 0 20%;
  }
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
const GridEtage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`
const UploadWrapper = styled.label`
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
  position: absolute;
  top: 1193px;
  background: rgb(201 193 171);
  padding: 4px 10px;
  border-radius: 5px;
  cursor: pointer;
`
const ChoosenPicture = styled.p`
  margin: 0;
  color: rgb(107, 107, 107);
  font-size: 14px;
  position: absolute;
  top: 1238px;
`
const Modal = styled.div`
  display: none;
`
