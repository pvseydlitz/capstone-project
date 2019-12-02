import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Create from './second-page/Create'
import { getMessages } from './services'
export default function App() {
  console.log(getMessages())
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/create">
          <Create></Create>
        </Route>
      </Switch>
    </Router>
  )
}
