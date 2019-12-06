import React, { useState } from 'react'
import styled from 'styled-components/macro'
import ShowMoreButton from './ShowMoreButton'
import Bookmark from './Bookmark'
import cross from './icons/cross.svg'

export default function MessageTuev({
  messageTuev,
  toggleBookmarked,
  handleClick,
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
      props.active ? 'repeat(3, 30px) 16px' : 'repeat(4, 30px) 30px 29px'};
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
  const Cross = styled.img`
    position: absolute;
    right: 34px;
    top: 28px;
  `

  return (
    <Message>
      <Bookmark
        onClick={toggleBookmarked}
        active={messageTuev.isBookmarked}
      ></Bookmark>
      <Cross src={cross} onClick={handleClick}></Cross>
      <Headline>TÜV Mangel</Headline>
      <Wrapper active={!showContent}>
        <Description>Nummer: {messageTuev.nummer}</Description>
        <Description>Ort/Bauteil</Description>
        <Description>{messageTuev.ort}</Description>
        <Description>
          {showContent ? 'Mangel / Feststellung / Hinweis' : ''}
        </Description>
        <Content>{showContent ? messageTuev.beschreibung : ''}</Content>
      </Wrapper>
      <ShowMoreButton onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Show less' : 'Show more'}
      </ShowMoreButton>
    </Message>
  )
}
