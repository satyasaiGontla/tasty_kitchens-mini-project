import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import NotFound from './components/NotFound'
import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <Route path="/bad-path" component={NotFound} />
        <Redirect to="bad-path" />
      </Switch>
    )
  }
}

export default App
