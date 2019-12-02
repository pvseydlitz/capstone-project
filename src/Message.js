import React, { useState } from 'react'
import styled from 'styled-components/macro'
import placeholder from './icons/Placeholder.svg'
import ShowMoreButton from './ShowMoreButton'
import Bookmark from './Bookmark'

export default function Message({ message, toggleBookmarked }) {
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
    grid-template-rows: 16px 16px 16px 16px 16px 16px 16px 16px auto 29px;
    grid-gap: 15px;
  `
  const Description = styled.p`
    margin: 0;
    font-size: 16px;
    color: rgb(107, 107, 107);
  `
  const Picture = styled.img`
    position: absolute;
    right: 22px;
    top: 40px;
  `
  const Content = styled.p`
    margin: 0;
    font-size: 16px;
    color: rgb(107, 107, 107);
    /* grid-column-start: 1;
    grid-column-end: 3; */
  `

  const [showContent, setShowContent] = useState(false)

  return (
    <Message>
      <Bookmark
        onClick={toggleBookmarked}
        active={message.isBookmarked}
      ></Bookmark>
      <Headline>{message.kategorie}</Headline>
      <Wrapper>
        <p
          style={{ margin: '0', color: 'rgb(107, 107, 107)', fontSize: '16px' }}
        >
          Ort des Schadens:
        </p>
        <Description>{message.wohnung}</Description>
        <Description>{message.raumbezeichunung}</Description>
        <Description>{message.datum}</Description>

        <p
          style={{ margin: '0', color: 'rgb(107, 107, 107)', fontSize: '16px' }}
        >
          Wer hat den Schaden gemeldet?
        </p>
        <Description>{message.name}</Description>
        <Description>{message.telefonnummer}</Description>
        <Description>{message.email}</Description>
        {/*  <Picture src={placeholder}></Picture> */}
        <Content>{showContent ? message.beschreibung : ''}</Content>
      </Wrapper>
      <ShowMoreButton onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Show less' : 'Show more'}
      </ShowMoreButton>
    </Message>
  )
}
