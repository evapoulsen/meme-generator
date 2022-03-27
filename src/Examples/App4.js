import React, { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Aygo",
    year: "2019",
    color: "black"
  });

  const updateBrand = () => {
      setCar(previousState => {
          return { ...previousState, brand: "Sköda", model: "Superb"}
      })
  }
  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateBrand}>Sköda</button>
    </div>
  )
}

export default Car;
