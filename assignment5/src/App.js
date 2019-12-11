import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect  } from 'react-router-dom';

import Header from "./components/Header.js"
import Home from "./views/Home.js"
import Sightings from "./views/Sightings.js"

function App(){
  return (
    <div className="App">
    <Header />

    <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Sightings" component={Sightings} />
        </Switch>
    </div>
  );
}

export default App;
