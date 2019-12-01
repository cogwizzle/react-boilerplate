import * as React from 'react'
import HelloWorld from '../hello_world'
import * as renderer from 'react-test-renderer'

it('Renders', () => {
  const component = renderer.create(
    <HelloWorld />
  )
  const results = component.toJSON()
  expect(results).toMatchSnapshot()
})

