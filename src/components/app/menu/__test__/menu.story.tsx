import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from '../menu'

addDecorator((storyFn) => (
  <Router>{storyFn()}</Router>
))

storiesOf('Menu', module)
  .add('Render', () => (
    <Menu />
  ))

