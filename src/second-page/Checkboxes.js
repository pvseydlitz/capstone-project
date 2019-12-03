import React from 'react'
import styled from 'styled-components/macro'

export default function Checkboxes() {
  const GridCheckboxes = styled.div`
    position: absolute;
    top: 787px;
    display: grid;
    grid-template-rows: repeat(4, 32px);
    grid-template-columns: 30px 1fr;
    grid-gap: 20px;
    align-items: center;
  `
  const Checkbox = styled.input`
    height: 20px;
    width: 20px;
    border-style: none;
    border: solid 2px rgb(201 193 171);
  `
  const Headline3Boxes = styled.h3`
    margin: 0;
    color: rgb(107, 107, 107);
    font-size: 16px;
    grid-column-start: 2;
  `

  return (
    <GridCheckboxes>
      <Checkbox type="checkbox" name="innenbereich" value="true"></Checkbox>
      <Headline3Boxes>Mangel im Innenbereich</Headline3Boxes>
      <Checkbox type="checkbox" name="außenbereich" value="true"></Checkbox>
      <Headline3Boxes>Mangel im Außenbereich</Headline3Boxes>
      <Checkbox
        type="checkbox"
        name="gemeinschaftseigentum"
        value="true"
      ></Checkbox>
      <Headline3Boxes>Mangel Gemeinschaftseigentum</Headline3Boxes>
      <Checkbox type="checkbox" name="sondereigentum" value="true"></Checkbox>
      <Headline3Boxes>Mangel Sondereigentum</Headline3Boxes>
    </GridCheckboxes>
  )
}
