import React from 'react'
import styled from 'styled-components/macro'
import Headline3 from './Headline3'

export default function AcceptButton() {
  const AcceptWrapper = styled.div`
    position: absolute;
    top: 1302px;
    display: grid;
    grid-template-columns: 30px 1fr;
    grid-gap: 20px;
    align-items: center;
  `
  const Accept = styled.input`
    height: 20px;
    width: 20px;
    border-style: none;
    border: solid 2px rgb(201 193 171);
  `
  return (
    <AcceptWrapper>
      <Accept type="checkbox" required></Accept>
      <Headline3>Hinweis akzeptiert</Headline3>
    </AcceptWrapper>
  )
}
