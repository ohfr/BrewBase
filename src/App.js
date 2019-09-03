import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './Components/Nav/NavBar';
import Home from './Components/HomePage/Home';
import About from './Components/AboutPage/About';
import Likes from './Components/Likes/Likes';


const App = () => {
  const [pubData, setPubData] = useState([]);
  const [search, setSearch] = useState("");
  const [likedItem, setLikedItem] = useState([]);

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
    console.log(likedItem)
  }
// should probably do a check and see if the item is already in the array, probably an easier fix
  // const deleteLike = (index) => {
  //   likedItem.splice(index, 1)
  // }
 
  return (
    <div>
      <NavBar search={searching}/>
      <Route exact path='/' render={(props) => <Home {...props}  pubName={pubData} likePicker={likePicker}/>} />
      <Route path="/Likes" render={(props) => <Likes likePicker={likePicker} {...props}  likedItems={likedItem} /> } />
      <Route path="/About" component={About} />
      

    </div>
  )
}

export default App;
