import React from 'react'
import styled from 'styled-components/macro'

import ToggleButton from './ToggleButton'

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
  const Arrow = styled.div`
    border: 15px solid transparent;
    border-bottom-color: rgb(174 172 172);
    opacity: 80%;
    position: absolute;
    top: 48px;
    left: 65px;
  `

  return (
    <div>
      <Menu>
        <Wrapper>
          <Text>Show only bookmarked</Text>
          <ToggleButton
            handleClick={handleClick}
            filterActive={filterActive}
          ></ToggleButton>
        </Wrapper>
      </Menu>
      <Arrow></Arrow>
    </div>
  )
}
