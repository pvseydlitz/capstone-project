import React from 'react'
import styled from 'styled-components/macro'

export default function DropdownMenu({ handleChange, selected }) {
  return (
    <Wrapper>
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
  background-image: url('https://res.cloudinary.com/dajgs01gh/image/upload/v1581717374/dropdown_y3kmal.svg');
  background-repeat: no-repeat;
  background-position: 95% center;
`
const Wrapper = styled.div`
  position: relative;
  min-width: 240px;
  max-width: 300px;
`
