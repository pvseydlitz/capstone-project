import React from 'react'
import styled from 'styled-components/macro'
import placeholder from './Placeholder.svg'

export default function Message() {
  const Message = styled.div`
    height: 180px;
    margin: 50px 20px;
    padding: 10px 20px;
    background: rgb(238, 238, 238);
    border-radius: 10px;
    position: relative;
  `
  const Headline = styled.h2`
    color: rgb(187 179 163);
    margin-bottom: 10px;
    font-size: 20px;
  `
  const Description = styled.p`
    color: rgb(107, 107, 107);
    margin: 0;
    font-size: 16px;
  `
  const Picture = styled.img`
    position: absolute;
    right: 22px;
    bottom: 27px;
  `
  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 100px;
  `

  return (
    <Message>
      <Headline>Schadensmeldung</Headline>
      <Wrapper>
        <Description>
          Lorem iDescriptionsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus rerum totam odio quos eum nihil iste unde corporis,
          iusto natus.
        </Description>
        <Picture src={placeholder}></Picture>
      </Wrapper>
    </Message>
  )
}
