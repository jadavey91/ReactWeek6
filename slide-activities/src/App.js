import React from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import "./App.css";
import fiat from './fiat-500.jpg';
import kia from './Kia-Ceed.jpg';
import audi from './audi-q8.jpg';
import suzuki from './suzuki-ignis.jpg';

//Module not found: You attempted to import ../public/Kia-Ceed.jpg
//which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
//so no need to import but need to figure out how else to grab the images

// const fiat = () => {
//   fiat.src = 'fiat-500.jpg';
// }

const Info = (props) => {
  return (
    <div>
      <img src={props.src}></img>
      <p>
        {" "}
        {props.name}, {props.option}{" "}
      </p>
    </div>
  );
};

const Price = (props) => {
  return(
    <div>
      <p>Price was  </p>
    </div>
  )
}


class App extends React.Component {
  //the class has to be called App?
  render() {
    return (
      <div className="CarInfo">
        {/* <Info name="Fiat 500" option="3 door Manual Petrol" />
        <Info name="Kia Ceed" option="5 door Manual Petrol" />
        <Info name="Audi Q8" option="5 door Automatic Diesel" />
        <Info name="Suzuki Ignis" option="5 door Manual Hybrid" /> */}
        
      <Info name = "Fiat 500" option = "3 door Manual Petrol" src = {fiat}/>
      <Info name = "Kia Ceed" option = "5 door Manual Petrol" src = {kia}/> 
      <Info name = "Audi Q8"  option = "5 door Automatic Diesel" src = {audi} />
      <Info name = "Suzuki Ignis" option = "5 door Manual Hybrid" src = {suzuki} />
      </div>
    );
  }
}

export default App;
