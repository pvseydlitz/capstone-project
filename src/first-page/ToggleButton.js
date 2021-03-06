import React from 'react'
import styled from 'styled-components/macro'

export default function ToggleButton({ filterActive, handleClick }) {
  const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 3em;
    height: 1.5em;
    align-items: center;
    grid-column-start: 2;
    grid-row-start: 1;
  `
  const Checkbox = styled.input`
    display: none;
  `
  const Slider = styled.span`
    border: solid 1px black;
    position: absolute;
    cursor: pointer;
    top: 0.5em;
    left: 1em;
    width: 2em;
    height: 1em;
    background-color: ${props => (props.filterActive ? 'green' : 'lightgrey')};
    border-radius: 1em;
    transition: all 0.8s ease-in-out;

    &::before {
      position: absolute;
      content: '';
      height: 0.6em;
      width: 0.6em;
      left: 0.1em;
      bottom: 0.1em;
      background-color: white;
      border-radius: 50%;
      transition: all 0.8s ease-in-out;
      transform: ${props => (props.filterActive ? 'translateX(0.9em)' : '')};
    }
  `
  return (
    <Label
      onClick={() => {
        handleClick()
      }}
    >
      <Checkbox type="checkbox"></Checkbox>
      <Slider filterActive={filterActive}></Slider>
    </Label>
  )
}
