import { configure } from '@storybook/react'
import { load, addDecorator } from '@storybook/react'
import styled from 'styled-components/macro'
import React from 'react'
import { withInfo } from '@storybook/addon-info'
import GlobalStyles from '../src/Globalstyles'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module)
addDecorator(withInfo)
addDecorator(storyFn => (
  <>
    <GlobalStyles />
    <Wrapper>{storyFn()}</Wrapper>
  </>
))

const Wrapper = styled.div`
  height: 667px;
  width: 375px;
  border: black 5px solid;
`
