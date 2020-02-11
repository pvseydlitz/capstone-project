import styled from 'styled-components/macro'

export default styled.div`
  display: grid;
  grid-template-rows: 97px auto /* 60px */;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
