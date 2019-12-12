import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import Header from "./components/Header.js"
import Home from "./views/Home.js"
import Flowers from "./views/Flowers.js"
import Sightings from "./views/Sightings.js"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Flowers" component={Flowers} />
          <Route exact path="/Sightings" component={Sightings} />
        </Switch>
      </div>
    );
  }
}

export default App;