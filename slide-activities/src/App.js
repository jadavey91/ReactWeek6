import React from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import "./App.css";
import fiat from "./fiat-500.jpg";
import kia from "./Kia-Ceed.jpg";
import audi from "./audi-q8.jpg";
import suzuki from "./suzuki-ignis.jpg";
import Info from "./components/Info";
import Price from "./components/Price";

class App extends React.Component {
  state = {
    cars: [
      {
        id: 1,
        name: "Fiat 500",
        option: "3 Door, Manual, Petrol",
        src: fiat,
        RRP: 14745,
        now: 11790,
      },
      {
        id: 2,
        name: "Kia Ceed",
        option: "5 door, Manual, Petrol",
        src: kia,
        RRP: 18850,
        now: 17342,
      },
      {
        id: 3,
        name: "Audi Q8",
        option: "5 door, Automatic, Diesel",
        src: audi,
        RRP: 88055,
        now: 76588,
      },
      {
        id: 4,
        name: "Suzuki Ignis",
        option: "5 door, Manual, Hybrid",
        src: suzuki,
        RRP: 17214,
        now: 15214,
      },
    ],
  };

  render() {
    const eachCar = this.state.cars.map((car) => {
      return (
        <Info
          key={car.id}
          name={car.name}
          option={car.option}
          src={car.src}
          RRP={car.RRP}
          now={car.now}
        />
      );
    });

    return (
      // <div className="wrapper">
      //   <div>
      //     <h1>Latest Brand New Car Deals</h1>
      //   </div>

      <div className="carInfo">
        <div className="wrapper">
        <h1>Latest Brand New Car Deals</h1>
        </div>
        {eachCar}
      </div>
      //   <Info
      //     name="Kia Ceed"
      //     option="5 door, Manual, Petrol"
      //     src={kia}
      //     RRP={18850}
      //     now={17342}
      //   />
      //   <Info
      //     name="Audi Q8"
      //     option="5 door, Automatic, Diesel"
      //     src={audi}
      //     RRP={88055}
      //     now={76588}
      //   />
      //   <Info
      //     name="Suzuki Ignis"
      //     option="5 door, Manual, Hybrid"
      //     src={suzuki}
      //     RRP={17214}
      //     now={15214}
      //   />
      //   <Price />
      //   </div>
      // </div>
    );
  }
}

export default App;
