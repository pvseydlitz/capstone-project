import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Headline2 from './Headline2'

export default function Description({ headline, position }) {
  const GridDescription = styled.div`
    display: grid;
    grid-template-rows: 32px 100px;
    width: 100%;
    position: absolute;
    top: ${position};
  `
  const Description = styled.textarea`
    border: solid 2px rgb(201 193 171);
    resize: vertical;
  `
  return (
    <GridDescription>
      <Headline2>{headline}</Headline2>
      <Description rows="5" name="beschreibung" required></Description>
    </GridDescription>
  )
}
Description.propTypes = {
  headline: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}
