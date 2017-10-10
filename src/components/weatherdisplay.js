import React, { Component } from 'react';

// import Geolocator from './geolocator.js'
import axios from 'axios';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from './Button.js'
// import Geolocator from './geolocator.js';

class Weatherdisplay extends Component {
  constructor(){
    super()

    this.state = {
      weather: [],
      temp_f: [],
      city: [],
      cityLocation: [],
      stateLocation: []
      


    }
    this.getWeather = this.getWeather.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }



  getWeather(){
    axios.get(`http://localhost:5111/api/displayweather`)
    .then(response => {
      
      this.setState({
        weather: response.data.current_observation.weather,
        temp: response.data.current_observation.temp_f,
        city: response.data.current_observation.display_location.city,
        icon: response.data.current_observation.icon,
       
      })
    })
  }

 getLocation() {
  axios.get(`http://localhost:5111/api/locationService`)
 
  .then(response => {
   
    this.setState({
      cityLocation: response.data.location.cityLocation,
      stateLocation: response.data.location.stateLocation
    })
  })
 }



  
  render() {
    console.log(this.state)
        
      return (
     
          <div className="weatherD">       
          <Button getWeather = {this.getWeather} />
         
          <div className="colorMyWeather">
          <div>{this.state.city} {this.state.temp}</div>
          <div>{this.state.weather}</div>
          </div>
         </div>
      
 
        
      )
    }
  
  }

export default Weatherdisplay;

