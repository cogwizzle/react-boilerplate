import * as React from 'react'
import * as ReactDom from 'react-dom'
import HelloWorld from './components/hello_world/hello_world.tsx'

ReactDom.render(
  (<HelloWorld />),
  document.querySelector('.main')
)

