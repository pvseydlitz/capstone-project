import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import cross from '../icons/cross.svg'
//import DropdownMenu from './DropdownMenu'

export default function MessageTuev({
  messageTuev,
  //handleStatusTuev,
  handleDeleteTuev,
}) {
  /* function handleChangeDropdown(number) {
    messageTuev.status = number
    handleStatusTuev(messageTuev)
  } */
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
            handleDeleteTuev(messageTuev._id)
          }}
        ></Cross>
      ) : (
        ''
      )}
      <Headline>TÜV-Mangel</Headline>
      <Wrapper>
        <Description>
          <b>Nummer:</b> {messageTuev.nummer}
        </Description>
        <Description>
          <b>Ort/Bauteil:</b> {messageTuev.ort}
        </Description>
        {/* <WrapperDropdown>
          <Description>
            <b>Status:</b>
          </Description>
          <DropdownMenu
            handleChangeDropdown={handleChangeDropdown}
            selected={messageTuev.status}
            showValue0={false}
          ></DropdownMenu>
        </WrapperDropdown> */}
        <Description>
          <b>Status:</b> {messageTuev.status}
        </Description>
        <Description>
          <b>Kurzbeschreibung:</b> {messageTuev.beschreibung}
        </Description>
      </Wrapper>
    </MessageLayout>
  )
}

const MessageLayout = styled.div`
  margin: 50px 20px;
  margin-top: 20px;
  padding: 10px 20px;
  position: relative;
  background: rgb(238, 238, 238);
  border-radius: 10px;
  //max-height: ${(props) => (props.active ? '' : '205px')};
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
  margin-bottom: 10px;
  font-size: 20px;
  color: rgb(187 179 163);
`
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-gap: 15px;
  width: 100%;
`
const Description = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgb(107, 107, 107);
`

/* const WrapperDropdown = styled.div`
  display: grid;
  grid-template-columns: auto 3fr 1fr;
  grid-gap: 20px;
` */
