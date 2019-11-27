import React from 'react'
import styled from 'styled-components/macro'

export default function FilterMenu() {
  const Menu = styled.div`
    position: absolute;
    top: 85px;
    left: 20px;
    z-index: 1;
    background: #6b6b6b;
    width: 100px;
    height: 150px;
  `
  return <Menu></Menu>
}
