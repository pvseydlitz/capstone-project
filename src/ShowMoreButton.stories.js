import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import ShowMoreButton from './ShowMoreButton'

export default {
  title: 'ShowMoreButton',
  decorators: [withKnobs],
}

export const standard = () => <ShowMoreButton />
