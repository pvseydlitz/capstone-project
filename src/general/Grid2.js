import styled from 'styled-components/macro'

export default styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(255, 255, 255);
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1000px) {
    width: 1000px;
    margin: 0 auto;
    border: 2px solid rgb(187 179 163);
  }
`
