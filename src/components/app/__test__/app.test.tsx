import * as React from 'react'
import App from '../app'
import * as renderer from 'react-test-renderer'

it('Renders', () => {
  const component = renderer.create(
    <App />
  )
  const results = component.toJSON()
  expect(results).toMatchSnapshot()
})

