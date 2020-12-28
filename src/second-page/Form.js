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
import { findNumberMessage } from '../general/services.js'

const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET
const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const USERID = process.env.REACT_APP_EMAILJS_USERID
const TEMPLATEID = process.env.REACT_APP_EMAILJS_TEMPLATEID
const SERVICEID = process.env.REACT_APP_EMAILJS_SERVICEID

const MainForm = memo(({ date }) => {
  const [choosenEtage, setChoosenEtage] = useState('')
  return (
    <>
      <GridWer>
        <Headline2>Wer hat den Mangel festgestellt?</Headline2>
        <Headline3>Name</Headline3>
        <Input type="text" name="name" required></Input>
        <Headline3>Telefonnummer</Headline3>
        <Input type="text" name="telefonnummer" required></Input>
        <Inline>
          <Headline3>E-Mail Adresse</Headline3>
          <Span id={'mailFormat'}>
            &nbsp;&nbsp;&nbsp;&nbsp;Bitte eine gültige E-Mail angeben
          </Span>
        </Inline>
        <Input
          type="text"
          name="email"
          onBlur={(event) => checkEmail(event)}
          required
        ></Input>
      </GridWer>
      <GridWo>
        <Headline2>Wann und wo wurde der Mangel festgelstellt?</Headline2>
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
          defaultValue={date}
        ></Input>
        <GridDropdowns>
          <GridColumns>
            <Headline3>Etage</Headline3>
            <DropdownMenuEtage
              handleSelect={(event) => {
                setChoosenEtage(event.target.value)
              }}
            ></DropdownMenuEtage>
          </GridColumns>
          <GridColumns>
            <Headline3>Wohnung</Headline3>
            <DropdownMenuWohnung floor={choosenEtage}></DropdownMenuWohnung>
          </GridColumns>
        </GridDropdowns>
        <Headline3>Raum-/Ortsbezeichnung</Headline3>
        <Input type="text" name="raumbezeichnung" required></Input>
      </GridWo>
      <Checkboxes></Checkboxes>
      <Description
        headline={'Genaue Mangelbeschreibung'}
        name={'beschreibung'}
      ></Description>
    </>
  )
})

export default function Form({ onSubmit1 }) {
  const [picture, setPicture] = useState('Kein Bild ausgewählt')
  return (
    <Wrapper onSubmit={handleSubmit} id="form">
      <MainForm></MainForm>
      <FlexBox>
        <GridEnd>
          <UploadWrapper>
            <Headline3 style={{ color: 'rgb(253 252 251)' }}>
              Foto Hochladen
            </Headline3>
            <input
              style={{ display: 'none' }}
              type="file"
              name="file"
              onChange={onInput}
              accept="image/png, image/jpeg"
            ></input>
            <img src={uploadIcon} alt={'upload icon'}></img>
          </UploadWrapper>
          <ChoosenPicture>{picture}</ChoosenPicture>
          <FinishButton>Meldung hochladen</FinishButton>
        </GridEnd>
      </FlexBox>
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
    data.status = 0
    delete data.gemeinschaftseigentum
    delete data.sondereigentum
    delete data.innenbereich
    delete data.außenbereich

    if (data.datum.includes('-') === false) {
      data.datum = new Date(
        data.datum.slice(6, 10) +
          '-' +
          data.datum.slice(3, 5) +
          '-' +
          data.datum.slice(0, 2)
      )
    }
    const user = localStorage.getItem('user')
    data.user = user
    if (data.file.size > 10000000) {
      imageTooLarge()
    } else {
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
                findNumberMessage().then((number) => {
                  data.number = number
                  console.log(data)
                  onSubmit1(data)
                  sendEmail(data)
                })
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
                findNumberMessage().then((number) => {
                  data.number = number
                  postImage(formData, data, form)
                })
              },
            },
            {
              label: 'Nein',
            },
          ],
        })
      }
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
      .catch((err) => alert(err.message))

    function onImageSave(response) {
      data.url = response.data.url
      onSubmit1(data)
      sendEmail(data)
      form.reset()
    }
  }

  function sendEmail(data) {
    const templateParams = {
      number: data.number,
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
function imageTooLarge() {
  confirmAlert({
    title: 'Bild zu groß',
    message:
      'Ihr Bild ist zu groß. Die Maximal erlaubte Größe ist 10 MB. Bitte wählen Sie ein kleineres Bild aus.',
    buttons: [
      {
        label: 'Hinweis schließen',
      },
    ],
  })
}
function checkEmail(event) {
  console.log(event.target.value)
  const input = event.target.value
  const span = document.getElementById('mailFormat')
  span.style.display = 'block'
  if (input.includes('.') && input.includes('@')) {
    span.style.display = 'none'
  }
}
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
const Wrapper = styled.form`
  position: relative;
  margin: 0 20px;
  @media (min-width: 768px) {
    margin: 0 20%;
  }
`
const GridWer = styled.div`
  display: grid;
  grid-template-rows: repeat(7, auto);
  grid-gap: 15px;
  width: 100%;
  margin: 20px 0 30px 0;
`
const GridWo = styled.div`
  display: grid;
  grid-template-rows: repeat(7, auto);
  grid-gap: 15px;
  width: 100%;
  margin-top: 30px;
`
const GridDropdowns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
const GridColumns = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-gap: 15px;
`
const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`
const UploadWrapper = styled.label`
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
  background: rgb(201 193 171);
  padding: 4px 10px;
  border-radius: 5px;
  cursor: pointer;
`
const ChoosenPicture = styled.p`
  margin: 0;
  color: rgb(107, 107, 107);
  font-size: 14px;
  margin-bottom: 15px;
`
const GridEnd = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  justify-items: center;
  margin-bottom: 30px;
`
const Modal = styled.div`
  display: none;
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
