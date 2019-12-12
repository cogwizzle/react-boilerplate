import * as React from 'react'
import About from '../about'
import * as renderer from 'react-test-renderer'

it('Renders', () => {
  const component = renderer.create(
    <About />
  )
  const results = component.toJSON()
  expect(results).toMatchSnapshot()
})

