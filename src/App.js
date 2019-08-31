import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './Components/Nav/NavBar';
import Home from './Components/HomePage/Home';
import About from './Components/AboutPage/About';

import './App.css';

const App = () => {
  const [pubData, setPubData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    //geolocation code, need to get lat long into city name VV MAYBE set up node backend api with node-geocoder to deliver that ???

    // console.log(navigator.geolocation.getCurrentPosition(position => {
    //   console.log(position)
    // }))
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${search}`)
    .then(res => {
      console.log(res.data)
      setPubData(res.data)
    })
    .catch(err => console.log(err))
  },[search]);

  const searching = val => {
    setSearch(val);
  }
  return (
    <div>
      <NavBar search={searching}/>
      <Route exact path='/' render={(props) => <Home {...props} pubName={pubData}/>} />
      <Route path="/About" component={About} />

    </div>
  )
}

export default App;
