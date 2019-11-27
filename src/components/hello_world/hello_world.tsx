import * as React from 'react'
import './hello_world.css'

interface iHelloWorldProps {

}

const HelloWorld: React.FunctionComponent<iHelloWorldProps> = () => {
  // State

  // Effects

  return (
    <div className="hello_world">
      New HelloWorld <span className="hello_world__sub">component.</span>
    </div>
  )
}

export default HelloWorld
export { iHelloWorldProps }

