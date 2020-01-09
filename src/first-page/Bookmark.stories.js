import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import Bookmark from './Bookmark'

export default {
  title: 'Bookmark',
  decorators: [withKnobs],
}

export const standard = () => (
  <div
    style={{
      position: 'relative',
      background: 'rgb(238, 238, 238)',
      height: '150px',
      width: '200px',
      marginTop: 20,
    }}
  >
    <Bookmark></Bookmark>
  </div>
)
