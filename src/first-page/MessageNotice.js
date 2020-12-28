import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import cross from '../icons/cross.svg'

export default function MessageTuev({
  messageNotice,
  handleDeleteNotice,
  index,
}) {
  useEffect(() => {
    checkUser()
  })
  const [userAdmin, setUserAdmin] = useState(false)
  function checkUser() {
    const userRole = localStorage.getItem('role')
    if (userRole === 'true') {
      setUserAdmin(true)
    }
  }
  return (
    <MessageLayout>
      {userAdmin ? (
        <Cross
          src={cross}
          onClick={() => {
            handleDeleteNotice(messageNotice._id)
          }}
        ></Cross>
      ) : (
        ''
      )}
      <Headline>Nr. {index + 1}</Headline>
      <Wrapper>
        <Description>
          <b>Datum:</b> {messageNotice.datum.slice(8, 10)}.
          {messageNotice.datum.slice(5, 7)}.{messageNotice.datum.slice(0, 4)}
        </Description>
        <Description>
          <b>Absender:</b> {messageNotice.name}
        </Description>
        <Description>
          <b>Mitteilung:</b> {messageNotice.beschreibung}
        </Description>
      </Wrapper>
    </MessageLayout>
  )
}

const MessageLayout = styled.div`
  margin: 50px 20px;
  margin-top: 20px;
  padding: 20px;
  position: relative;
  background: rgb(238, 238, 238);
  border-radius: 10px;
  max-width: 450px;
  @media (min-width: 768px) {
    margin: 50px 8%;
    margin-top: 20px;
  }
`
const Cross = styled.img`
  position: absolute;
  right: 20px;
  top: 28px;
  cursor: pointer;
`
const Headline = styled.h2`
  font-size: 20px;
  color: rgb(187 179 163);
  margin: 0;
  margin-bottom: 10px;
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
