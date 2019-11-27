import React from 'react'
import styled from 'styled-components/macro'

export default function FilterMenu() {
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

          <Checkbox type="checkbox"></Checkbox>
        </Wrapper>
      </Menu>
      <Arrow></Arrow>
    </div>
  )
}
