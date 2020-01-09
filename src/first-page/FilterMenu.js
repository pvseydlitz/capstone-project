import React from 'react'
import styled from 'styled-components/macro'

import ToggleButton from './ToggleButton'

export default function FilterMenu({ handleClick, filterActive }) {
  const Menu = styled.div`
    position: absolute;
    top: 110px;
    left: 20px;
    z-index: 1;
    /*  background: rgb(174 172 172); */
    /* opacity: 80%; */
    width: 100%;
    height: 150px;
    /* padding: 10px 20px; */
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    align-items: center;
  `
  const Text = styled.p`
    margin: 0;
    color: rgb(107, 107, 107);
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
    </div>
  )
}
