import React from 'react'
import styled from 'styled-components/macro'

export default function RadioButtons({
  handleClick1,
  handleClick2,
  handleClick3,
  isClicked1,
  isClicked2,
  isClicked3,
}) {
  return (
    <RadioButtonsLayout>
      <Label1 onClick={handleClick1} active={isClicked1}>
        <Button type="radio" />
        Mangelmeldungen
      </Label1>
      <Label2 onClick={handleClick2} active={isClicked2}>
        <Button type="radio" />
        TÜV-Mängel
      </Label2>
      <Label3 onClick={handleClick3} active={isClicked3}>
        <Button type="radio" />
        Allgemeines
      </Label3>
      {isClicked1 ? (
        <UnderHeadline>
          Hier werden gemeldete Gewährleistungsmängel gesammelt, die vom
          Bauträger abgearbeitet werden.
        </UnderHeadline>
      ) : (
        ''
      )}
      {isClicked2 ? (
        <UnderHeadline>
          Hier wird über den Bearbeitungsstatus der Mängel laut TÜV-Protokoll im
          Gemeinschaftseigentum informiert.
        </UnderHeadline>
      ) : (
        ''
      )}
      {isClicked3 ? (
        <UnderHeadline>
          Allgemeine Informationen und Ankündigungen für die Hausgemeinschaft
          werden hier gesammelt und können auch von Bewohnern auf der zweiten
          Seite unter der Auswahl Allgemeines hochgeladen werden.
        </UnderHeadline>
      ) : (
        ''
      )}
    </RadioButtonsLayout>
  )
}

const RadioButtonsLayout = styled.section`
  margin: 20px;
  margin-bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 34px auto;
  grid-auto-flow: row;
  @media (min-width: 768px) {
    grid-column: 1/3;
  }
`
const Button = styled.input`
  all: unset;
`
const Label1 = styled.label`
  font-size: 14px;
  border: 2px solid rgb(187 179 163);
  border-radius: 0.5em;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  color: ${props => (props.active ? 'rgb(253 252 251)' : 'rgb(107, 107, 107)')};
  background: ${props => (props.active ? 'rgb(187 179 163)' : '')};
  cursor: pointer;
`
const Label2 = styled.label`
  font-size: 14px;
  border: 2px solid rgb(187 179 163);
  border-radius: 0.5em;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  color: ${props => (props.active ? 'rgb(253 252 251)' : 'rgb(107, 107, 107)')};
  background: ${props => (props.active ? 'rgb(187 179 163)' : '')};
  cursor: pointer;
`
const Label3 = styled.label`
  font-size: 14px;
  border: 2px solid rgb(187 179 163);
  border-radius: 0.5em;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  color: ${props => (props.active ? 'rgb(253 252 251)' : 'rgb(107, 107, 107)')};
  background: ${props => (props.active ? 'rgb(187 179 163)' : '')};
  cursor: pointer;
`
const UnderHeadline = styled.h3`
  grid-column: 1/4;
  align-self: center;
  justify-self: center;
  color: rgb(107, 107, 107);
  font-size: 16px;
  padding: 0 15px;
  text-align: center;
`
