import * as React from 'react'
import Menu from '../menu'
import { BrowserRouter as Router } from 'react-router-dom'
import * as renderer from 'react-test-renderer'

it('Renders', () => {
  const component = renderer.create(
    <Router><Menu /></Router>
  )
  const results = component.toJSON()
  expect(results).toMatchSnapshot()
})

