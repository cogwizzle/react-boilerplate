import * as React from 'react'
import Menu from '../menu'
import * as renderer from 'react-test-renderer'

it('Renders', () => {
  const component = renderer.create(
    <Menu />
  )
  const results = component.toJSON()
  expect(results).toMatchSnapshot()
})

