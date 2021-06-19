import React from 'react';

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
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
        <Route exact path = "/RoomScreen"     render={()=>{
          return localStorage.getItem("user_id")? <RoomScreen/> : <Redirect to = '/login'/>
        }} />
        <Route exact path = "/"    render={()=>{
          return localStorage.getItem("user_id")? <Redirect to ="/roomscreen"/> : <Login/>
        }} />

      </Switch>
    </Router>
  );
}

export default App;