import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Container from './components/container/Container';
import Index from './components/index/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Container />
        </Route>
        <Route path="/index">
          <Index />
        </Route>
      </Switch>
    </Router>





  );
}

export default App;
