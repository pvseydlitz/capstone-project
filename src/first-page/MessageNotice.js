import React, { useState } from 'react'
import styled from 'styled-components/macro'

import cross from '../icons/cross.svg'
import Password from './Password'

export default function MessageTuev({
  messageNotice,
  /* handleStatusTuev, */
  handleDeleteNotice,
}) {
  const [showInputPassword, setShowInputPassword] = useState(false)

  /* function handleChangeDropdown(number) {
    messageNotice.status = number
    handleStatusTuev(messageTuev)
  } */
  function saveMessageId(id) {
    localStorage.setItem('id', id)
  }

  return (
    <MessageLayout>
      <Cross
        src={cross}
        onClick={() => {
          setShowInputPassword(true)
          saveMessageId(messageNotice._id)
        }}
      ></Cross>
      <Headline>{messageNotice.kategorie}</Headline>
      <Wrapper>
        <Description>
          <b>Datum:</b> {messageNotice.datum.slice(8, 10)}.
          {messageNotice.datum.slice(5, 7)}.{messageNotice.datum.slice(0, 4)}
        </Description>
        <Description>
          <b>Mitteilung:</b> {messageNotice.beschreibung}
        </Description>
      </Wrapper>
      {showInputPassword ? (
        <Password
          text={'Passwort eingeben zum Löschen'}
          passwordApproved={handleDeleteNotice}
          hidePassword={() => setShowInputPassword(false)}
        ></Password>
      ) : (
        ''
      )}
    </MessageLayout>
  )
}

const MessageLayout = styled.div`
  margin: 50px 20px;
  padding: 10px 20px;
  position: relative;
  background: rgb(238, 238, 238);
  border-radius: 10px;
`
const Cross = styled.img`
  position: absolute;
  right: 20px;
  top: 28px;
`
const Headline = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
  color: rgb(187 179 163);
`
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 30px 30px auto;
  width: 100%;
`
const Description = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgb(107, 107, 107);
`
