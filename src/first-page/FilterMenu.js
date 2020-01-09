import React from 'react'
import styled from 'styled-components/macro'

import ToggleButton from './ToggleButton'

export default function FilterMenu({ handleClick, filterActive, checkInput }) {
  const Menu = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
    width: 100%;
    height: 150px;
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    align-items: center;
  `
  const Text = styled.h3`
    margin: 0;
    font-size: 16px;
    color: rgb(107, 107, 107);
  `
  const GridCheckboxes = styled.div`
    position: absolute;
    top: 50px;
    display: grid;
    grid-template-rows: repeat(4, 32px);
    grid-template-columns: 30px 1fr;
    align-items: center;
  `
  const Checkbox = styled.input`
    height: 15px;
    width: 15px;
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
    <div>
      <Menu>
        <Wrapper>
          <Text>Nur gemerkte Meldungen</Text>
          <ToggleButton
            handleClick={handleClick}
            filterActive={filterActive}
          ></ToggleButton>
        </Wrapper>
        <GridCheckboxes>
          <Checkbox
            type="checkbox"
            name="innenbereich"
            value="innenbereich"
            onChange={event => checkInput(event)}
          ></Checkbox>
          <Headline3Boxes>Mangel im Innenbereich</Headline3Boxes>
          <Checkbox
            type="checkbox"
            name="außenbereich"
            value="außenbereich"
            onChange={event => checkInput(event)}
          ></Checkbox>
          <Headline3Boxes>Mangel im Außenbereich</Headline3Boxes>
          <Checkbox
            type="checkbox"
            name="gemeinschaftseigentum"
            value="gemeinschaftseigentum"
            onChange={event => checkInput(event)}
          ></Checkbox>
          <Headline3Boxes>Mangel Gemeinschaftseigentum</Headline3Boxes>
          <Checkbox
            type="checkbox"
            name="sondereigentum"
            value="sondereigentum"
            onChange={event => checkInput(event)}
          ></Checkbox>
          <Headline3Boxes>Mangel Sondereigentum</Headline3Boxes>
        </GridCheckboxes>
      </Menu>
    </div>
  )
}
