import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Message from './Message'
import messages from './messages'

export default {
  title: 'Message',
  decorators: [withKnobs],
}

export const standard = () =>
  messages.map((message, index) => (
    <Message message={message} key={index}></Message>
  ))[0]
