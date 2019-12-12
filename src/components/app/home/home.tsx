import * as React from 'react'
import './home.css'

interface iHomeProps {

}

const Home: React.FunctionComponent<iHomeProps> = () => {
  // State

  // Effects

  return (
    <div className="home">
      <h3>Welcome to your new React-Boilerplate project!</h3>
      <p>
        To learn more about the capabilities of React-Boilerpalte go to the documentation on github.
      </p>
    </div>
  )
}

export default Home
export { iHomeProps }

