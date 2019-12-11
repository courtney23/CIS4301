import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlowersList from '../components/FlowersList';

import Header from "../components/Header"

function Sightings(){
  return (
    <div className="App">
    <Header />
    <FlowersList></FlowersList>

    </div>
  );
}

export default Sightings;
