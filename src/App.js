import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './Components/Nav/NavBar';
import Home from './Components/HomePage/Home';
import About from './Components/AboutPage/About';
import Likes from './Components/Likes/Likes';
// import BrewCard from './Components/BrewCards/BrewCard';


const App = () => {
  const [pubData, setPubData] = useState([]);
  const [search, setSearch] = useState("");
  const [likedItem, setLikedItem] = useState([]);

  useEffect(() => {

    // reverse geocode VV

    // navigator.geolocation.getCurrentPosition(pos => {
    //   axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`)
    //   .then(res => console.log(res))
    // })

    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${search}`)
    .then(res => {
      
      setPubData(res.data)
      console.log(res.data)
    })
    .catch(err => console.log(err))
  },[search]);

  const searching = val => {
    setSearch(val);
  }

  const likePicker = (obj, index) => {
    if (likedItem.includes(obj)) {
      likedItem.splice(index, 1);
    } else {
    setLikedItem(likedItem => [...likedItem, obj])
    }
  }

  return (
    <div>
      {/* <NavBar search={searching}/>
      <Route exact path='/Home' render={(props) => <Home {...props} pubName={pubData} likePicker={likePicker}/>} />
      <Route path="/Likes" render={(props) => <Likes {...props} likePicker={likePicker} likedItems={likedItem} /> } />
      <Route path="/brewery/:id" render={(props) => <BrewCard {...props} /> } /> 
      <Route path="/About" component={About} /> */}
    <NavBar search={searching} />
    <Route exact path="/" render={(props) => <Home {...props} data={pubData} likePicker={likePicker} likedItem={likedItem} /> } />
    <Route path="/Likes" render={(props) => <Likes {...props} likePicker={likePicker} likedItems={likedItem} /> } />
    <Route path="/About" component={About} />

    </div>
  )
}

export default App;
