import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import Password from './Password'

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

const DropDown = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  cursor: pointer;
  color: rgb(107 107 107);
  background: rgb(201 193 171);
  font-size: 16px;
  height: 32px;
  width: 100%;
  padding-left: 10px;
  background-image: url(' http://192.168.178.20:3000/static/media/dropdown.7f1cbd23.svg');
  background-repeat: no-repeat;
  background-position: 95% center;
`
const Wrapper = styled.div`
  position: relative;
  min-width: 180px;
  max-width: 250px;
`
