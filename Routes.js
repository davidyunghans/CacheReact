import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import {Home} from './pages/Home';

import {ilogin} from './pages/ilogin';

import {rlogin} from '.pages/rlogin';

import {signup} from '.pages/signup.js';

import {Header} from './components/Home';

import {Footer} from '.components/Footer';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/login">
          <ilogin />
        </Route>
        <Route path="/login">
          <rlogin />
        </Route>
        <Route path="/signup">
          <signup />
        </Route>
      </Switch>
    </Router>
  )
}