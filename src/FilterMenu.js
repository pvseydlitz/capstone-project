import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function FilterMenu({ handleClick, filterActive }) {
  const onButtonClick = () => {
    handleClick()
  }

  const Menu = styled.div`
    position: absolute;
    top: 75px;
    left: 20px;
    z-index: 1;
    background: rgb(174 172 172);
    opacity: 80%;
    width: 250px;
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
  const Checkbox = styled.input`
    height: 18px;
    width: 18px;
    border: solid 1px black;
    /* background-color: ${props => (props.filterActive ? 'green' : 'red')}; */
        /* Grundfläche */
    position: absolute;
    cursor: pointer;
    top: 1.5em; 
    left: 2em;
    width: 4em;
    height: 2em;
    background-color: #c32e04; /* red */
    border-radius: 1em; 
    transition: all .3s ease-in-out;
   :before {  /* verschiebbarer Button */
    position: absolute;
    content: "";
    height: 1.6em;
    width: 1.6em;
    left: 0.2em;
    bottom: 0.2em;
    background-color: white;
    border-radius: 50%;
    transition: all .3s ease-in-out;
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

          <Checkbox
            className="slider"
            onClick={() => {
              onButtonClick()
              //onClick()
            }}
            type="checkbox"
            filterActive={filterActive}
          ></Checkbox>
        </Wrapper>
      </Menu>
      <Arrow></Arrow>
    </div>
  )
}
