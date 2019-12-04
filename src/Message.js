import React, { useState } from 'react'
import styled from 'styled-components/macro'
import ShowMoreButton from './ShowMoreButton'
import Bookmark from './Bookmark'
import cross from './icons/cross.svg'

export default function Message({ message, toggleBookmarked, handleClick }) {
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
    grid-template-rows: 16px 16px 16px 16px 16px 16px 16px 16px 16px auto 29px;
    grid-gap: 15px;
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
    right: 34px;
    top: 28px;
  `
  const [showContent, setShowContent] = useState(false)
  function checkArea() {
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
  }

  return (
    <Message>
      <Bookmark
        onClick={toggleBookmarked}
        active={message.isBookmarked}
      ></Bookmark>
      <Cross src={cross} onClick={handleClick}></Cross>
      <Headline>{message.kategorie}</Headline>
      <Wrapper>
        <p
          style={{ margin: '0', color: 'rgb(107, 107, 107)', fontSize: '16px' }}
        >
          Ort des Schadens:
        </p>
        <Description>{checkArea()}</Description>
        <Description>{message.wohnung}</Description>
        <Description>{message.raumbezeichnung}</Description>
        <Description>{message.datum}</Description>

        <p
          style={{ margin: '0', color: 'rgb(107, 107, 107)', fontSize: '16px' }}
        >
          Wer hat den Schaden gemeldet?
        </p>
        <Description>{message.name}</Description>
        <Description>{message.telefonnummer}</Description>
        <Description>{message.email}</Description>
        <Content>{showContent ? message.beschreibung : ''}</Content>
      </Wrapper>
      <ShowMoreButton onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Show less' : 'Show more'}
      </ShowMoreButton>
    </Message>
  )
}
