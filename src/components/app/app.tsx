import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import Home from './home/home'
import About from './about/about'
import './app.css'

interface iAppProps {

}

const App: React.FunctionComponent<iAppProps> = () => {
  // State

  // Effects

  return (
    <div className="app">
      <Router>
        <header className="app__header">
          <div className="app__header__title">
            MyApp
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </header>
        <div className="app__content">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
export { iAppProps }

