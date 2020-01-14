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
      localStorage.clear()
      hidePassword()
    }
  }
  return (
    <Label
      onClick={() => {
        hidePassword()
        localStorage.clear()
      }}
    >
      <PasswordWrapper>
        <Text>{text}</Text>
        <Input
          type="password"
          placeholder="Passwort eingeben"
          autoFocus
          onChange={event => checkPasswordInput(event.target.value)}
        ></Input>
      </PasswordWrapper>
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
const PasswordWrapper = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
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
`
password.propTypes = {
  text: PropTypes.string,
}
