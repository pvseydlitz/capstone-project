import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import Password from './Password'
import dropdownIcon from '../icons/dropdown.svg'

export default function DropdownMenu({
  handleChangeDropdown,
  selected,
  showValue0,
}) {
  const [showInputpassword, setShowInputPassword] = useState(false)

  function saveNumber(event) {
    localStorage.setItem('id', event.target.value)
  }

  return (
    <div>
      <Wrapper>
        <DropDown
          name="kategorie"
          onChange={event => {
            setShowInputPassword(true)
            saveNumber(event)
          }}
          value={selected}
        >
          {showValue0 ? <option value="0">Meldung erhalten</option> : ''}
          <option value="1">In Bearbeitung</option>
          <option value="2">Termin vereinbart</option>
          <option value="3">Mangel behoben</option>
        </DropDown>
        <DropdownIcon src={dropdownIcon} alt="dropdown icon"></DropdownIcon>
      </Wrapper>
      {showInputpassword ? (
        <Password
          text={'Passwort eingeben zum Bearbeiten'}
          passwordApproved={handleChangeDropdown}
          hidePassword={() => setShowInputPassword(false)}
        ></Password>
      ) : (
        ''
      )}
    </div>
  )
}
DropdownMenu.propTypes = {
  showValue0: PropTypes.bool,
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  background: rgb(201 193 171);
  height: 24px;
  padding: 0 5px;
  max-width: 175px;
`
const DropDown = styled.select`
  background: rgb(201 193 171);
  color: rgb(107 107 107);
  font-size: 14px;
  height: 24px;
  border: none;
  -webkit-appearance: button;
  appearance: button;
  outline: none;
  position: relative;
`
const DropdownIcon = styled.img`
  height: 17px;
  width: 24px;
  justify-self: center;
  text-align: center;
  pointer-events: none;
`
