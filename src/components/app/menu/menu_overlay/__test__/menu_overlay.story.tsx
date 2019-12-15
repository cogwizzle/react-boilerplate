import React from 'react'
import { storiesOf } from '@storybook/react'
import MenuOverlay from '../menu_overlay'

storiesOf('MenuOverlay', module)
  .add('isOpen', () => (
    <MenuOverlay isOpen={true} />
  ))
  .add('Not isOpen', () => (
    <MenuOverlay isOpen={false} />
  ))

