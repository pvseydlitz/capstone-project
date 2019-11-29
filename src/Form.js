import React from 'react'
import styled from 'styled-components/macro'

export default function From() {
  const Wrapper = styled.div`
    position: relative;
    margin: 0 20px;
  `

  const Headline = styled.h1`
    color: rgb(187 179 163);
    font-size: 21px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    margin: 0;
  `
  const Category = styled.div`
    display: grid;
    grid-template-rows: 32px 40px;
    width: 100%;
    position: absolute;
    top: 55px;
  `
  const Headline2 = styled.h2`
    margin: 0;
    color: rgb(107, 107, 107);
    font-size: 18px;
  `
  const Input = styled.input`
    height: 40px;
    width: auto;
    border: solid 2px rgb(201 193 171);
  `

  return (
    <Wrapper>
      <Headline>Neue Meldung erstellen</Headline>
      <Category>
        <Headline2>Kategorie der Meldung</Headline2>
        <Input type="text"></Input>
      </Category>
    </Wrapper>
  )
}
