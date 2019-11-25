import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
//import { action } from '@storybook/addon-actions'
import Message from './Message'
//import styled from 'styled-components/macro'

export default {
  title: 'Message',
  decorators: [withKnobs],
}

export const standard = () => <Message></Message>
