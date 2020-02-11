import React, { useState } from 'react'
import styled from 'styled-components/macro'

import ShowMoreButton from './ShowMoreButton'
import cross from '../icons/cross.svg'
import DropdownMenu from './DropdownMenu'
import Password from './Password'

export default function MessageTuev({
  messageTuev,
  handleStatusTuev,
  handleDeleteTuev,
}) {
  const [showContent, setShowContent] = useState(false)
  const [showInputPassword, setShowInputPassword] = useState(false)

  function handleChangeDropdown(number) {
    messageTuev.status = number
    handleStatusTuev(messageTuev)
  }
  function saveMessageId(id) {
    localStorage.setItem('id', id)
  }

  return (
    <MessageLayout active={showContent}>
      <Cross
        src={cross}
        onClick={() => {
          setShowInputPassword(true)
          saveMessageId(messageTuev._id)
        }}
      ></Cross>
      <Headline>TÜV-Mangel</Headline>
      <Wrapper active={!showContent}>
        <Description>
          <b>Nummer:</b> {messageTuev.nummer}
        </Description>
        <Description>
          <b>Ort / Bauteil:</b> {messageTuev.ort}
        </Description>
        <WrapperDropdown>
          <Description>
            <b>Status:</b>
          </Description>
          <DropdownMenu
            handleChangeDropdown={handleChangeDropdown}
            selected={messageTuev.status}
            showValue0={false}
          ></DropdownMenu>
        </WrapperDropdown>
        <Description>
          <br></br>
          <b>{showContent ? 'Mangel / Feststellung / Hinweis' : ''}</b>
        </Description>
        <Content>{showContent ? messageTuev.beschreibung : ''}</Content>
      </Wrapper>
      <ShowMoreButton onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Show less' : 'Show more'}
      </ShowMoreButton>
      {showInputPassword ? (
        <Password
          text={'Passwort eingeben zum Löschen'}
          passwordApproved={handleDeleteTuev}
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
  margin-top: 20px;
  padding: 10px 20px;
  position: relative;
  background: rgb(238, 238, 238);
  border-radius: 10px;
  max-height: ${props => (props.active ? '' : '205px')};
  @media (min-width: 768px) {
    margin: 50px 2vw;
    margin-top: 20px;
    width: 46vw;
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
  grid-template-rows: ${props =>
    props.active ? 'repeat(3, 30px) 16px' : 'repeat(3, 30px) 50px auto 29px'};
  width: 100%;
`
const Description = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgb(107, 107, 107);
`
const Content = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgb(107, 107, 107);
`
const WrapperDropdown = styled.div`
  display: grid;
  grid-template-columns: auto 3fr 1fr;
  grid-gap: 20px;
`
