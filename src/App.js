import React, { useState, useEffect, useReducer} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './Components/Nav/NavBar';
import Home from './Components/HomePage/Home';
import About from './Components/AboutPage/About';
import Likes from './Components/Likes/Likes';
// import BrewCard from './Components/BrewCards/BrewCard';

import {reducer, initialState, REMOVE_ITEM, ADD_ITEM} from './Reducers/reducer';

const App = () => {
  const [pubData, setPubData] = useState([]);
  const [search, setSearch] = useState("");
  // const [likedItem, setLikedItem] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

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

  // const likePicker = (obj, index) => {
  //   let current = likedItem.indexOf(obj);
  //   if (likedItem.includes(obj)) {
  //     likedItem.length > 1 ? setLikedItem(likedItem => likedItem.splice(current, 1)) : setLikedItem([]);
  //   } else {
  //   setLikedItem(likedItem => [...likedItem, obj])
  //   }
    
  // }
  const likePicker = (item) => {
   if (state.includes(item)) {
     dispatch({type: REMOVE_ITEM, payload: item})
   } else {
     dispatch({type: ADD_ITEM, payload: item})
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
    <Route exact path="/" render={(props) => <Home {...props} data={pubData} likePicker={likePicker}  likedItem={state} /> } />
    <Route path="/Likes" render={(props) => <Likes {...props} likePicker={likePicker} likedItem={state} /> } />
    <Route path="/About" component={About} />

    </div>
  )
}

export default App;
