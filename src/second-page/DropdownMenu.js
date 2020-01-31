import React from 'react'
import styled from 'styled-components/macro'

export default function DropdownMenu({ handleChange, selected }) {
  return (
    <Wrapper>
      <Span>&#11015;</Span>
      <DropDown name="kategorie" onChange={handleChange} value={selected}>
        <option value="Gewährleistungsmangel">Gewährleistungsmangel</option>
        <option value="Tüv-Mangel">TÜV-Mangel</option>
        <option value="Allgemeines">Allgemeines</option>
      </DropDown>
    </Wrapper>
  )
}

const DropDown = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  cursor: pointer;
  color: rgb(107 107 107);
  background: rgb(201 193 171);
  font-size: 16px;
  height: 32px;
  width: 100%;
  padding-left: 10px;
`
const Wrapper = styled.div`
  position: relative;
  min-width: 220px;
  max-width: 300px;
`
const Span = styled.span`
  position: absolute;
  pointer-events: none;
  right: 10px;
  top: 5px;
  color: rgb(107 107 107);
`
