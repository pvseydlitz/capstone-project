import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function FilterMenu({ handleClick, filterActive }) {
  const Menu = styled.div`
    position: absolute;
    top: 75px;
    left: 20px;
    z-index: 1;
    background: rgb(174 172 172);
    opacity: 80%;
    width: 200px;
    height: 150px;
    padding: 10px 20px;
  `
  const Arrow = styled.div`
    border: 15px solid transparent;
    border-bottom-color: rgb(174 172 172);
    opacity: 80%;
    position: absolute;
    top: 48px;
    left: 65px;
  `
  const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 10em;
    height: 3.5em;
  `
  const Checkbox = styled.input`
    display: none;
  `
  const Slider = styled.span`
    border: solid 1px black;
    position: absolute;
    cursor: pointer;
    top: 1.5em;
    left: 2em;
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

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    align-items: center;
  `
  const Text = styled.p`
    color: rgb(57, 57, 57);
  `

  return (
    <div>
      <Menu>
        <Wrapper>
          <Text>Show only bookmarked</Text>

          <Label
            onClick={() => {
              handleClick()
            }}
          >
            <Checkbox type="checkbox"></Checkbox>
            <Slider filterActive={filterActive}></Slider>
          </Label>
        </Wrapper>
      </Menu>
      <Arrow></Arrow>
    </div>
  )
}
