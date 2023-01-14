import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/Landing'
import LoginPage from './components/pages/Login'
import RegisterPage from './components/pages/Register'
import ForgetPasswordPage from './components/pages/ForgetPassword'
import HomePage from './components/pages/Home'

import './App.css'

function App() {
 return (
    <div className="App">
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                </Switch>
            </div>
        </Router>
    </div>
  )
}


export default App