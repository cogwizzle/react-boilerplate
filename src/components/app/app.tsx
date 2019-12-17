import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './home/home'
import About from './about/about'
import Menu from './menu/menu'
import './app.css'

const App: React.FunctionComponent<{}> = () => (
  <div className="app">
    <Router>
      <Menu />
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

export default App

