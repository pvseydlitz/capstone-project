import React, { useState, memo } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import {
  UserRegistration,
  UsernameValidation,
} from './services/RegistrationService'

import Globalstyles from '../general/Globalstyles'
import Headline2 from '../second-page/Headline2'
import Headline3 from '../second-page/Headline3'
import Input from '../second-page/Input'
import logo from '../icons/logo.svg'

const MainForm = memo(() => {
  return (
    <>
      <Headline3>Vorname</Headline3>
      <Input type="text" name="firstName" />
      <Headline3>Nachname</Headline3>
      <Input type="text" name="lastName" />
    </>
  )
})
export default function Registration() {
  const [isThisUsernameTaken, setIsThisUsernameTaken] = useState(false)

  return (
    <Wrapper>
      <Globalstyles></Globalstyles>
      <Logo src={logo} alt=""></Logo>
      <Form onSubmit={handleSubmit}>
        <Headline2>Registrierung</Headline2>

        <MainForm></MainForm>

        <Headline3>Benutzername</Headline3>
        <Input
          type="text"
          name="username"
          onBlur={handleOnBlur}
          autoComplete="Username"
          required
        />

        <Headline3>Passwort</Headline3>
        <Input
          type="password"
          name="password"
          autoComplete="password"
          required
        />

        <Button type="submit" className="btn btn-primary">
          Registrieren
        </Button>

        <Button>
          <Link to="/" style={{ color: 'rgb(253 252 251)' }}>
            Home-Seite
          </Link>
        </Button>
      </Form>
    </Wrapper>
  )

  async function handleOnBlur(event) {
    const data = {
      user_name: event.target.value,
    }
    const isUsernameTaken = await UsernameValidation(data)
    isUsernameTaken === 204
      ? setIsThisUsernameTaken(true)
      : setIsThisUsernameTaken(false)
    console.log(isThisUsernameTaken)
  }
  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const data = {
      first_name: form.firstName.value,
      last_name: form.lastName.value,
      user_name: form.username.value,
      password: form.password.value,
    }

    const registerStatus = await UserRegistration(data)
    if (registerStatus === 200) {
      confirmAlert({
        title: 'Registrierung erfolgreich',
        buttons: [
          {
            label: 'Zum Login',
            onClick: () => (window.location.href = '/login'),
          },
          {
            label: 'Nein',
          },
        ],
      })
    } else alert('Registrierung fehlgeschlagen')
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  position: relative;
  background: rgb(255, 255, 255);
`
const Logo = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 130px;
  height: auto;
`
const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(10, auto);
  grid-gap: 15px;
`
const Button = styled.button`
  padding: 4px 24px;
  border-radius: 5px;
  font-size: 16px;
  background: rgb(201 193 171);
  color: rgb(253 252 251);
  display: flex;
  justify-content: center;
  cursor: pointer;
`
