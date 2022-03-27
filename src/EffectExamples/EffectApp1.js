import React, { useEffect, useState } from "react";

function App() {
    const[count, setCount] = useState(0);

    console.log("Component Rendered");

    useEffect(function() {
        console.log("Effect ran")
    }, []);
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}

export default App;

