import * as React from 'react'
import MenuOverlay from '../menu_overlay'
import * as renderer from 'react-test-renderer'

describe('Render menu overlay', () => {
  it('isOpen', () => {
    const component = renderer.create(
      <MenuOverlay isOpen={true} />
    )
    const results = component.toJSON()
    expect(results).toMatchSnapshot()
  })

  it('Not isOpen', () => {
    const component = renderer.create(
      <MenuOverlay isOpen={false} />
    )
    const results = component.toJSON()
    expect(results).toMatchSnapshot()
  })
})

