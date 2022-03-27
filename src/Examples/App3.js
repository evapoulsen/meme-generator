import React, { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Aygo",
    year: "2019",
    color: "black"
  });

  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </div>
  )
}

export default Car;
