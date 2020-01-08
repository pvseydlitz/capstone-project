import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import Globalstyles from '../general/Globalstyles'
import LoginService from './services/LoginService'
import Headline2 from '../second-page/Headline2'
import Headline3 from '../second-page/Headline3'
import Input from '../second-page/Input'
import logo from '../icons/logo.svg'

export default function Login() {
  return (
    <Wrapper className="Login">
      <Globalstyles></Globalstyles>
      <Logo src={logo} alt=""></Logo>
      <Form onSubmit={handleSubmit}>
        <Headline2>Login</Headline2>
        <Headline3>Username</Headline3>
        <Input type="text" name="username" autoComplete="Username" required />
        <Headline3>Password</Headline3>
        <Input
          type="password"
          name="password"
          autoComplete="Password"
          required
        />
        <Button type="submit" className="btn btn-primary">
          Login
        </Button>
        <Button>
          <Link to="/register" style={{ color: 'rgb(253 252 251)' }}>
            Registrieren
          </Link>
        </Button>
      </Form>
    </Wrapper>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target

    onSubmit(form)
  }
  async function onSubmit(form) {
    const data = {
      user_name: form.username.value,
      password: form.password.value,
    }
    const loginResult = await LoginService(data)
    console.log(loginResult)

    if (loginResult !== 200) {
      alert('Falscher Benutzername oder Passwort')
    } else console.log('login successful')
    fetch('/registration/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status === 200) {
          window.location.href = `/`
        } else {
          const error = new Error(res.error)
          throw error
        }
      })
      .catch(err => {
        console.error(err)
        alert('Error logging in please try again')
      })
  }
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
  grid-template-rows: repeat(5, auto);
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
