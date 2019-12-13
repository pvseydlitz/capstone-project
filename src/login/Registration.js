import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import {
  UserRegistration,
  UsernameValidation,
} from './services/RegistrationService'

import Headline2 from '../second-page/Headline2'
import Headline3 from '../second-page/Headline3'
import Input from '../second-page/Input'
import Globalstyles from '../Globalstyles'
import logo from '../icons/logo.svg'
export default function Registration() {
  const [isThisUsernameTaken, setIsThisUsernameTaken] = useState()
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
      console.log('register successful')
    } else console.log('fail')
  }
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    position: relative;
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
  `

  return (
    <Wrapper>
      <Globalstyles></Globalstyles>
      <Logo src={logo} alt=""></Logo>
      <Form onSubmit={handleSubmit}>
        <Headline2>Registrierung</Headline2>

        <Headline3>Vorname</Headline3>
        <Input type="text" name="firstName" />

        <Headline3>Nachname</Headline3>
        <Input type="text" name="lastName" />

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
          <Link to="/login" style={{ color: 'rgb(253 252 251)' }}>
            Login
          </Link>
        </Button>
      </Form>
    </Wrapper>
  )
}
