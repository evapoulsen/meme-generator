import { useState } from "react";



function Car() {
  const [brand, setBrand] = useState("Toyota");
  const [model, setModel] = useState("Aygo");
  const [year, setYear] = useState("2019");
  const [color, setColor] = useState("black");
  
  return (
    <div>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </div>
  )
}

export default Car;
