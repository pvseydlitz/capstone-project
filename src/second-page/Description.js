import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Headline2 from './Headline2'

export default function Description({ headline, name }) {
  return (
    <GridDescription>
      <Headline2>{headline}</Headline2>
      <Input rows="5" name={name} required></Input>
    </GridDescription>
  )
}
const GridDescription = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-gap: 15px;
  width: 100%;
  margin: 30px 0;
`
const Input = styled.textarea`
  border: solid 2px rgb(201 193 171);
  resize: vertical;
`
Description.propTypes = {
  headline: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
