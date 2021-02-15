import React from 'react';
import './App.css';
import fiat from '../public/fiat-500.jpg';  //why wont this work?



const Info = (props) => {
  return(
    <div>
      <p> {props.name}, {props.option} </p>
    </div>
  )
}

class App extends React.Component {  //the class has to be called App?
  render() {
  return(
    <div className = "CarInfo">
      <Info name = "Fiat 500" option = "3 door Manual Petrol" />
      <Info name = "Kia Ceed" option = "5 door Manual Petrol" /> 
      <Info name = "Audi Q8"  option = "5 door Automatic Diesel" />
      <Info name = "Suzuki Ignis" option = "5 door Manual Hybrid" />
    </div>
  )
  }
}

export default App;