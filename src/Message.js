import React, { useState } from 'react'
import styled from 'styled-components/macro'
import placeholder from './Placeholder.svg'
import ShowMoreButton from './ShowMoreButton'

export default function Message({ message }) {
  const Message = styled.div`
    margin: 50px 20px;
    padding: 10px 20px;
    position: relative;
    height: 180px;
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
    grid-template-columns: auto 100px;
  `
  const Content = styled.p`
    margin: 0;
    font-size: 16px;
    color: rgb(107, 107, 107);
  `
  const Picture = styled.img`
    position: absolute;
    right: 22px;
    bottom: 27px;
  `
  const [showContent, setShowContent] = useState(false)

  return (
    <Message>
      <Headline>{message.category}</Headline>
      <Wrapper>
        <Content>{message.description}</Content>
        <Picture src={placeholder}></Picture>
      </Wrapper>
      <Content>{showContent ? message.content : ''}</Content>
      <ShowMoreButton onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Show less' : 'Show more'}
      </ShowMoreButton>
    </Message>
  )
}
