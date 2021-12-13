import {Component} from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
