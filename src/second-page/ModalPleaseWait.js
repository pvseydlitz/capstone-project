import React from 'react'
import styled from 'styled-components/macro'

export default function modalPleaseWait() {
  return (
    <Overlay className="react-confirm-alert-overlay">
      <Body className="react-confirm-alert">
        <Headline1>Bitte Warten</Headline1>
        Ihre Meldung wird hochgeladen... Dies kann bis zu 3 Minuten dauern.
      </Body>
    </Overlay>
  )
}
const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(255, 255, 255, 0.9);
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
  opacity: 0;
  -webkit-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
  -moz-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
  -o-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
  animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
`
const Body = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 400px;
  padding: 30px;
  text-align: left;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);
  color: #666;
`
const Headline1 = styled.h1`
  margin-top: 0;
`
