import React from 'react'
import styled from 'styled-components/macro'

export default function RadioButtons({
  handleClick1,
  handleClick2,
  isClicked1,
  isClicked2,
}) {
  const RadioButtons = styled.section`
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  `
  const Button = styled.input`
    all: unset;
  `
  const Label1 = styled.label`
    margin-right: 20px;
    border: 2px solid rgb(187 179 163);
    border-radius: 0.5em;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    color: ${props =>
      props.active ? 'rgb(253 252 251)' : 'rgb(107, 107, 107)'};
    background: ${props => (props.active ? 'rgb(187 179 163)' : '')};
  `
  const Label2 = styled.label`
    border: 2px solid rgb(187 179 163);
    border-radius: 0.5em;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    color: ${props =>
      props.active ? 'rgb(253 252 251)' : 'rgb(107, 107, 107)'};
    background: ${props => (props.active ? 'rgb(187 179 163)' : '')};
  `

  return (
    <RadioButtons>
      <Label1 onClick={handleClick1} active={isClicked1}>
        <Button type="radio" />
        Gewährleistungsmängel
      </Label1>
      <Label2 onClick={handleClick2} active={isClicked2}>
        <Button type="radio" />
        TÜV-Mängel
      </Label2>
    </RadioButtons>
  )
}