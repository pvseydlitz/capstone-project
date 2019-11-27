import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as FilterIcon } from './icons/filterbutton.svg'

export default function FilterButton() {
  const [isClicked, setIsClicked] = useState(false)

  const Icon = styled.div`
    position: absolute;
    top: 50px;
    left: 35px;
  `
  return (
    <Icon>
      <FilterIcon
        onClick={() => setIsClicked(!isClicked)}
        isClicked={isClicked}
      ></FilterIcon>
    </Icon>
  )
}
