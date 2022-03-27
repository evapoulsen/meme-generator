import React, { useState } from "react";
import boxes from "./boxes";
import Box from "./Box";
import "./App10.css"

function App(props) {
    const [squares, setSquares] = useState(boxes);

    const squareElement = squares.map(square => (
        <Box key={square.id} on={square.on} />
    ))
return (
    <main>
        {squareElement}
    </main>
)
}

export default App;

