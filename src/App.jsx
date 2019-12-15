import React, { createRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import LanguageFilters from './components/LanguageFilters'
import RepoGallery from './components/RepoGallery'
import LandingPage from './components/LandingPage'

const App = () => {
  const ref = createRef()

  return (
    <Router>
      <Header darkModeBlenderRef={ref} />
      <LanguageFilters />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/:user" component={RepoGallery} />
      </Switch>
      <div ref={ref} id="dark-mode-blender" />
    </Router>
  )
}

export default App
