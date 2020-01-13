import React, { useState } from 'react'
import styled from 'styled-components/macro'
import dropdownIcon from '../icons/dropdown.svg'

const PASSWORD = process.env.REACT_APP_PASSWORD

export default function DropdownMenu({ handleChangeDropdown, selected }) {
  const [showInputpassword, setShowInputPassword] = useState(false)

  function saveNumber(event) {
    localStorage.setItem('number', event.target.value)
  }

  function checkPasswordInput(password) {
    const number = localStorage.getItem('number')
    const data = password
    if (data === PASSWORD) {
      console.log(number)
      handleChangeDropdown(number)
      localStorage.clear()
    }
  }

  return (
    <div>
      <Wrapper2>
        <DropDown
          name="kategorie"
          onChange={event => {
            setShowInputPassword(true)
            saveNumber(event)
          }}
          value={selected}
        >
          <option value="0">Meldung versendet</option>
          <option value="1">In Bearbeitung</option>
          <option value="2">Handwerker kommt</option>
          <option value="3">Mangel behoben</option>
        </DropDown>
        <DropdownIcon src={dropdownIcon} alt="dropdown icon"></DropdownIcon>
      </Wrapper2>
      {showInputpassword ? (
        <Label onClick={() => setShowInputPassword(false)}>
          <PasswordWrapper>
            <Text>Passwort eingeben zum Bearbeiten</Text>
            <Input
              type="password"
              placeholder="Passwort eingeben"
              autoFocus
              onChange={event => checkPasswordInput(event.target.value)}
            ></Input>
          </PasswordWrapper>
        </Label>
      ) : (
        ''
      )}
    </div>
  )
}
const Wrapper2 = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  background: rgb(201 193 171);
  height: 24px;
`
const DropDown = styled.select`
  background: rgb(201 193 171);
  color: rgb(107 107 107);
  font-size: 14px;
  height: 24px;
  border: none;
  padding-left: 5px;
  -webkit-appearance: button;
  appearance: button;
  outline: none;
  position: relative;
`
const DropdownIcon = styled.img`
  justify-self: center;
  text-align: center;
  display: inline;
  pointer-events: none;
`
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
