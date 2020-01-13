import React, { useState } from 'react'
import styled from 'styled-components/macro'

import ShowMoreButton from './ShowMoreButton'
import Bookmark from './Bookmark'
import cross from '../icons/cross.svg'
import DropdownMenu from './DropdownMenu'

export default function Message({
  message,
  toggleBookmarked,
  handleClick,
  handleStatus,
}) {
  const [showContent, setShowContent] = useState(false)
  const Message = styled.div`
    margin: 50px 20px;
    padding: 10px 20px;
    position: relative;
    min-height: 180px;
    background: rgb(238, 238, 238);
    border-radius: 10px;
  `
  const Headline = styled.h2`
    margin-bottom: 10px;
    font-size: 20px;
    color: rgb(187 179 163);
  `
  const Wrapper = styled.div`
    display: grid;
    grid-template-rows: ${props =>
      props.active ? 'repeat(5, 30px) 16px' : 'repeat(9, 30px) auto auto 29px'};
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
  const Cross = styled.img`
    position: absolute;
    right: 20px;
    top: 28px;
  `
  const Image = styled.img`
    margin-top: 20px;
    width: 200px;
    height: auto;
    justify-self: center;
  `
  const WrapperDropdown = styled.div`
    display: grid;
    grid-template-columns: auto 3fr 1fr;
    grid-gap: 20px;
  `
  /* function checkArea() {
    let area = []
    if (message.innenbereich === 'true') {
      area.push('Innenbereich')
    }
    if (message.außenbereich === 'true') {
      area.push('Außenbereich')
    }
    if (message.gemeinschaftseigentum === 'true') {
      area.push('Gemeinschafteigentum')
    }
    if (message.sondereigentum === 'true') {
      area.push('Sondereigentum')
    }
    return area.join(', ')
  } */
  function handleChangeDropdown(number) {
    message.status = number
    handleStatus(message)
  }
  return (
    <Message>
      <Bookmark
        onClick={toggleBookmarked}
        active={message.isBookmarked}
      ></Bookmark>
      <Cross src={cross} onClick={handleClick}></Cross>
      <Headline>Gewährleistungsmangel</Headline>

      <Wrapper active={!showContent}>
        <b>
          <p
            style={{
              margin: '0',
              color: 'rgb(107, 107, 107)',
              fontSize: '16px',
            }}
          >
            Ort des Schadens:
          </p>
        </b>
        <Description>{message.bereich.join(', ')}</Description>
        <Description>
          {message.wohnung}, {message.raumbezeichnung}
        </Description>
        <Description>Datum: {message.datum.slice(0, 10)}</Description>
        <WrapperDropdown>
          <Description>Status: </Description>
          <DropdownMenu
            handleChangeDropdown={handleChangeDropdown}
            selected={message.status}
          ></DropdownMenu>
        </WrapperDropdown>

        <b>
          <p
            style={{
              margin: '0',
              color: 'rgb(107, 107, 107)',
              fontSize: '16px',
            }}
          >
            {showContent ? 'Wer hat den Schaden gemeldet?' : ''}
          </p>
        </b>
        <Description>{showContent ? message.name : ''}</Description>
        <Description>{showContent ? message.telefonnummer : ''}</Description>
        <Description>{showContent ? message.email : ''}</Description>
        <Content>{showContent ? message.beschreibung : ''}</Content>
        {showContent ? <Image src={message.url} alt=""></Image> : ''}
      </Wrapper>

      <ShowMoreButton onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Show less' : 'Show more'}
      </ShowMoreButton>
    </Message>
  )
}
