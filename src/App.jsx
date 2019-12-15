import React, { createRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import RepoGallery from './components/RepoGallery'
import LandingPage from './components/LandingPage'

const App = () => {
  const ref = createRef()

  return (
    <Router>
      <Header darkModeBlenderRef={ref} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/:user" component={RepoGallery} />
      </Switch>
      <div ref={ref} id="dark-mode-blender" />
    </Router>
  )
}

export default App
