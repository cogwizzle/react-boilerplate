import React from 'react'
import { storiesOf } from '@storybook/react'
import About from '../about'

storiesOf('About', module)
  .add('Render', () => (
    <About />
  ))

