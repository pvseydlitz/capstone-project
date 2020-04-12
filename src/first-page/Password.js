import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const PASSWORD = process.env.REACT_APP_PASSWORD

export default function password({ passwordApproved, hidePassword, text }) {
  function checkPasswordInput(password) {
    const id = localStorage.getItem('id')
    const data = password
    if (data === PASSWORD) {
      passwordApproved(id)
      localStorage.removeItem('id')
      hidePassword()
    }
  }
  return (
    <Label>
      <Label2
        onClick={() => {
          hidePassword()
          localStorage.removeItem('id')
        }}
      ></Label2>
      <PasswordWrapper>
        <Text>{text}</Text>
        <Input
          id="input"
          autoFocus
          type="password"
          placeholder="Passwort eingeben"
          onChange={(event) => checkPasswordInput(event.target.value)}
        ></Input>
      </PasswordWrapper>
      <Label3
        onClick={() => {
          hidePassword()
          localStorage.removeItem('id')
        }}
      ></Label3>
    </Label>
  )
}

const Label = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: lightgray;
  opacity: 0.9;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Label2 = styled.div`
  height: 38%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
const Label3 = styled.div`
  height: 48%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`
const PasswordWrapper = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  z-index: 1;
`
const Text = styled.h3`
  margin: 0;
  font-size: 16px;
  color: rgb(107, 107, 107);
`
const Input = styled.input`
  height: 32px;
  width: auto;
  border: solid 2px rgb(201 193 171);
  &:focus {
    font-size: 11px;
  }
`
password.propTypes = {
  text: PropTypes.string,
}
