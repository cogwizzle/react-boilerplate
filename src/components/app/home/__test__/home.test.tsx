import * as React from 'react'
import Home from '../home'
import * as renderer from 'react-test-renderer'

it('Renders', () => {
  const component = renderer.create(
    <Home />
  )
  const results = component.toJSON()
  expect(results).toMatchSnapshot()
})

