import React from 'react'
import styled from 'styled-components/macro'

export default function DropdownMenuEtage({ handleSelect }) {
  return (
    <Wrapper>
      <DropDown name="etage" required onChange={handleSelect}>
        <option value="">Bitte auswählen</option>
        <option value="Außenbereich">Außenbereich</option>
        <option value="Keller">Keller</option>
        <option value="Erdgeschoss">Erdgeschoss</option>
        <option value="1. Stock">1. Stock</option>
        <option value="1. Stock">2. Stock</option>
        <option value="1. Stock">3. Stock</option>
        <option value="1. Stock">4. Stock</option>
        <option value="5. Stock">5. Stock</option>
        <option value="Dachgeschoss">Dachgeschoss</option>
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
  background-image: url('https://res.cloudinary.com/dajgs01gh/image/upload/v1581717374/dropdown_y3kmal.svg');
  background-repeat: no-repeat;
  background-position: 95% center;
`
const Wrapper = styled.div`
  position: relative;
  min-width: 240px;
  max-width: 300px;
`
