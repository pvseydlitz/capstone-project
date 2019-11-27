import React, { useState } from 'react'
import styled from 'styled-components/macro'
import placeholder from './icons/Placeholder.svg'
import ShowMoreButton from './ShowMoreButton'
import Bookmark from './Bookmark'

export default function Message({ message }) {
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
    grid-template-columns: auto 85px;
    grid-template-rows: 83px auto 29px;
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
    grid-column-start: 1;
    grid-column-end: 3;
  `

  const [showContent, setShowContent] = useState(false)

  return (
    <Message>
      <Bookmark />
      <Headline>{message.category}</Headline>
      <Wrapper>
        <Description>{message.description}</Description>
        <Picture src={placeholder}></Picture>
        <Content>{showContent ? message.content : ''}</Content>
      </Wrapper>
      <ShowMoreButton onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Show less' : 'Show more'}
      </ShowMoreButton>
    </Message>
  )
}
