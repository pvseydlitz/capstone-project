import React from 'react'
import styled from 'styled-components/macro'

export default function Menu() {
  const Background = styled.div`
    width: 150px;
    background: white;
    position: absolute;
    right: 0;
    top: 20px;
  `
  return <Background></Background>
}
