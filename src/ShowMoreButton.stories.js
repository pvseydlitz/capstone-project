import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import ShowMoreButton from './ShowMoreButton'

export default {
  title: 'ShowMoreButton',
  decorators: [withKnobs],
}

export const standard = () => (
  <div
    style={{
      position: 'relative',
      background: 'grey',
      height: '150px',
      width: '200px',
    }}
  >
    <ShowMoreButton>Show more</ShowMoreButton>
  </div>
)
