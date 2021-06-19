import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import PlayingScreen from './PlayingScreen.js';
import RoomScreen from './RoomScreen';
import Login from './components/index/index.jsx'
import Register from './components/register/register.jsx'
import 'antd/dist/antd.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/login"          component = {Login} />
        <Route exact path = "/register"          component = {Register} />
        <Route exact path = "/playingscreen"  component = {PlayingScreen} />
        <Route exact path = "/RoomScreen"     component = {RoomScreen} />
        <Route exact path = "/"               component = {PlayingScreen} />

      </Switch>
    </Router>
  );
}

export default App;