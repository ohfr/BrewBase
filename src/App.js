import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './Components/Nav/NavBar';
import Home from './Components/HomePage/Home';
import About from './Components/AboutPage/About';
import Likes from './Components/Likes/Likes';

import './App.css';

const App = () => {
  const [pubData, setPubData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    //geolocation code, need to get lat long into city name VV MAYBE set up node backend api with node-geocoder to deliver that ???

    // https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${pos.coords.x}&lon=${pos.coords.y}

    // reverse geocode !! ^^ coords could be wrong, mac doesnt like navigator


    // navigator.geolocation.getCurrentPosition(pos => {
    //   console.log(pos);
    // })

    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${search}`)
    .then(res => {
      
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
      <Route path="/Likes" render={(props) => <Likes {...props} likes={"true"} /> } />

    </div>
  )
}

export default App;
